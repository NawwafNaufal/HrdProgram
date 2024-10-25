const db = require("../config/connection")

const logAbsensiTotal = () => {
    const query = `SELECT 
    latest_absen.old_nama, 
    de.nama_karyawan,
    de.jabatan,
    de.nik,
    YEAR(latest_absen.new_tanggal) AS tahun,
    MONTH(latest_absen.new_tanggal) AS bulan,
    COUNT(CASE WHEN latest_absen.new_status_absen = 'Masuk' THEN 1 END) AS total_masuk,
    COUNT(CASE WHEN latest_absen.new_status_absen = 'Izin' THEN 1 END) AS total_izin,
    COUNT(CASE WHEN latest_absen.new_status_absen = 'Alpha' THEN 1 END) AS total_alpha,
    COUNT(CASE WHEN latest_absen.new_status_absen = 'Cuti' THEN 1 END) AS total_cuti
FROM 
    (SELECT 
         la.old_nama,
         la.new_tanggal,
         la.new_status_absen,
         la.created_at,
         la.tahun
     FROM 
         log_absensi la
     INNER JOIN 
         (SELECT 
              old_nama, 
              new_tanggal, 
              MAX(created_at) AS max_created_at
          FROM 
              log_absensi
          GROUP BY 
              old_nama, 
              new_tanggal) latest 
     ON 
         la.old_nama = latest.old_nama AND 
         la.new_tanggal = latest.new_tanggal AND 
         la.created_at = latest.max_created_at
    ) AS latest_absen
JOIN 
    data_employee de ON (de.id = latest_absen.old_nama)
GROUP BY 
    latest_absen.old_nama, 
    de.nama_karyawan, 
    de.jabatan, 
    de.nik, 
    YEAR(latest_absen.new_tanggal), 
    MONTH(latest_absen.new_tanggal)
ORDER BY 
    latest_absen.old_nama, tahun, bulan;`

return db.execute(query)
}

module.exports = {logAbsensiTotal}