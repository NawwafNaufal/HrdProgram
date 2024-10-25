const db = require("../config/connection")

const postDb = () => {
    const query = `SELECT ak.id, de.nama_karyawan, jabatan.jabatan, ak.id_status FROM absen_karyawan ak
                    JOIN data_employee de ON ak.id_nama = de.id
                    JOIN jabatan ON de.jabatan = jabatan.id`;
    return db.execute(query);
};

const putDb = (id_status,tanggal,id) => {
    const query = `UPDATE absen_karyawan 
                    SET id_status = ?,tanggal =? WHERE id = ?`;
    const value = [id_status,tanggal,id];
    return db.execute(query, value);
};

module.exports = {postDb,putDb}