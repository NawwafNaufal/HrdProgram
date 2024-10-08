const db = require("../config/connection")

const postDb = (id_status,id_nama,id_jabatan) => {
    const query = `INSERT INTO absen_karyawan (id_status, id_nama, id_jabatan)
                    VALUES (?,?,?);`
    const value = [id_status,id_nama,id_jabatan]
        return db.execute(query,value)
}

module.exports = {postDb}