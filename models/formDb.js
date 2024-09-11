const db = require("../config/connection")

const getDataEmployee = () => {
    const query = "SELECT * FROM form "
        return db.execute(query)
}

const postDataEmployee =async (
    nama_karyawan,
    nik,
    jenis_kelamin,
    pendidikan,
    tanggal_masuk,
    tanggal_lahir,
    id_status,
    awal_kontrak,
    akhir_kontrak,
    alamat
) => {
    const query = "INSERT INTO form (nama_karyawan,nik,jenis_kelamin,pendidikan,tanggal_masuk,tanggal_lahir,id_status,awal_kontrak,akhir_kontrak,alamat) VALUES (?,?,?,?,?,?,?,?,?,?)"
    const value = [nama_karyawan,
        nik,
        jenis_kelamin,
        pendidikan,
        tanggal_masuk,
        tanggal_lahir,
        id_status,
        awal_kontrak,
        akhir_kontrak,
        alamat
    ]
    return db.execute(query,value)
}

module.exports = {getDataEmployee,postDataEmployee}
