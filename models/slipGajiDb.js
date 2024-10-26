const db = require("../config/connection")

const getslipGaji = () => {
    const query = ` WITH RankedAbsensi AS (
    SELECT 
        la.old_nama,
        la.new_tanggal,
        la.new_status_absen,
        la.created_at,
        ROW_NUMBER() OVER (
            PARTITION BY la.old_nama, la.new_tanggal
            ORDER BY la.created_at DESC
        ) AS rn
    FROM 
        log_absensi la
),
FinalStatus AS (
    SELECT
        old_nama,
        new_tanggal,
        new_status_absen AS final_status
    FROM
        RankedAbsensi
    WHERE
        rn = 1
),
SalaryBase AS (
    SELECT 
        de.id,
        de.nama_karyawan,
        j.jabatan,
        g.id_tipe,
        COALESCE(gi.gaji_harian, g.gaji_harian) AS gaji_harian,
        g.tanggal_mulai AS gaji_tanggal_mulai,
        g.tanggal_akhir AS gaji_tanggal_akhir,
        COALESCE(gi.gaji_lembur, 0) AS nominal_lembur,
        COALESCE(gi.bonus, 0) AS nominal_bonus,
        COALESCE(gi.potongan, 0) AS nominal_potongan
    FROM
        data_employee de
        JOIN jabatan j ON de.jabatan = j.id
        JOIN gaji g ON j.id = g.jabatan
        LEFT JOIN gaji_individual gi ON de.id = gi.id_karyawan
            AND gi.tanggal_mulai = g.tanggal_mulai  -- Pastikan rentang tanggal sesuai
            AND gi.tanggal_akhir = g.tanggal_akhir
    WHERE
        g.tanggal_akhir <= CURDATE()
)
SELECT 
    sb.id,
    sb.nama_karyawan,
    sb.jabatan,
    sb.id_tipe,
    sb.gaji_harian,
    sb.gaji_tanggal_mulai,
    sb.gaji_tanggal_akhir,
    COUNT(
        CASE 
            WHEN fs.final_status != 'Alpha' 
                 AND fs.new_tanggal BETWEEN sb.gaji_tanggal_mulai AND sb.gaji_tanggal_akhir 
            THEN 1
            ELSE NULL 
        END
    ) AS total_absensi_masuk,
    (COUNT(
        CASE 
            WHEN fs.final_status != 'Alpha' 
                 AND fs.new_tanggal BETWEEN sb.gaji_tanggal_mulai AND sb.gaji_tanggal_akhir 
            THEN 1
            ELSE NULL 
        END
    ) * sb.gaji_harian) AS total_gaji_masuk,
    sb.nominal_lembur,
    sb.nominal_bonus,
    sb.nominal_potongan,
    (
        (COUNT(
            CASE 
                WHEN fs.final_status != 'Alpha' 
                     AND fs.new_tanggal BETWEEN sb.gaji_tanggal_mulai AND sb.gaji_tanggal_akhir 
                THEN 1
                ELSE NULL 
            END
        ) * sb.gaji_harian) +
        sb.nominal_lembur +
        sb.nominal_bonus -
        sb.nominal_potongan
    ) AS total_gaji
FROM 
    SalaryBase sb
    LEFT JOIN FinalStatus fs ON sb.id = fs.old_nama
        AND fs.new_tanggal BETWEEN sb.gaji_tanggal_mulai AND sb.gaji_tanggal_akhir
GROUP BY
    sb.id,
    sb.nama_karyawan,
    sb.jabatan,
    sb.id_tipe,
    sb.gaji_harian,
    sb.gaji_tanggal_mulai,
    sb.gaji_tanggal_akhir,
    sb.nominal_lembur,
    sb.nominal_bonus,
    sb.nominal_potongan;

`

    return db.execute(query)
}

const patchSlipgaji = (id_karyawan, tanggal_mulai, tanggal_akhir, gaji_lembur, bonus, potongan) => {
    const query = `INSERT INTO gaji_individual (
        id_karyawan, tanggal_mulai, tanggal_akhir, gaji_lembur, bonus, potongan
    ) VALUES (?, ?, ?, ?, ?, ?)`;
    
    const values = [id_karyawan, tanggal_mulai, tanggal_akhir, gaji_lembur, bonus, potongan];

    return db.execute(query, values);
};


module.exports = {getslipGaji,patchSlipgaji}

