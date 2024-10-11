const db = require("../config/connection")

const postDb = () => {
    const query = `SELECT absen_karyawan.id, pd.nama_karyawan, ed.jabatan, absen_karyawan.id_status 
                    FROM absen_karyawan 
                    JOIN programhrd.personal_data pd ON pd.id = absen_karyawan.id_nama 
                    JOIN programhrd.employee_data ed ON pd.id = ed.id_personal_data;`;
    return db.execute(query);
};

// Update status absen
const putDb = (id_status, id) => {
    const query = `UPDATE absen_karyawan SET id_status = ? WHERE id = ?`;
    const value = [id_status, id];
    return db.execute(query, value);
};

module.exports = {postDb,putDb}