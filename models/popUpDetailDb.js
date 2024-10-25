const db = require("../config/connection")


const detailDB = () => {
    const query = `SELECT de.id,de.nik,de.nama_karyawan,de.jenis_kelamin,de.pendidikan,
                    j.jabatan,s.status,de.tanggal_lahir,de.alamat,de.no_hp,de.usia,de.asal,de.bagian,de.kelompok,
                    de.kontrak,de.keterangan_kontrak,de.bpjs_kategori,de.awal_kontrak,de.akhir_kontrak,de.mulai_kerja,
                    de.akhir_kerja,de.kpj,de.kode_bag,de.nik_kerja,de.id_jenis
                    FROM data_employee de
                    JOIN jabatan j ON (de.jabatan = j.id)
                    JOIN status s ON (de.id_status = s.id)`

    return db.execute(query)
}

module.exports = {detailDB}