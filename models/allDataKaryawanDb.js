const db = require("../config/connection")

const getDataAllDb = () => {
    const query = `SELECT pd.pendidikan, s.status, pd.tanggal_lahir, pd.alamat, pd.no_hp, pd.usia, pd.asal,
                    ed.bagian, ed.kelompok, ed.id_kp, ed.kontrak, ed.keterangan_kontrak,
                    ed.bpjs_kategori, ed.awal_kontrak, ed.akhir_kontrak, ed.mulai_kerja,
                    ed.akhir_kerja, ed.kpj, ed.kode_bag, ed.nik, j2.jenis
                    FROM personal_data pd
                    LEFT JOIN status s ON pd.id_status = s.id
                    LEFT JOIN employee_data ed ON pd.id = ed.id_personal_data
                    LEFT JOIN jenis j2 ON ed.id_jenis = j2.id;`
    return db.execute(query)
}

module.exports = getDataAllDb