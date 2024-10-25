const db = require("../config/connection")

const logAbsensiRouteDb = () => {
    const query = `SELECT ak.id AS absen_id, 
                            de.nama_karyawan, 
                            jabatan.jabatan,
                            de.nik
                    FROM absen_karyawan ak
                    JOIN data_employee de ON ak.id_nama = de.id
                    JOIN jabatan ON de.jabatan = jabatan.id;`
    return db.execute(query)
}


module.exports = {logAbsensiRouteDb}