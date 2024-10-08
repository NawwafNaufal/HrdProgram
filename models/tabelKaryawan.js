const db = require("../config/connection")

const getDataKarywanDb = () => {
    const query = `SELECT personal_data.nik, personal_data.nama_karyawan, j.jabatan, 
                    personal_data.jenis_kelamin,personal_data.alamat
                    FROM personal_data JOIN employee_data ed on personal_data.id = ed.id_personal_data
                    JOIN jabatan j on j.id = ed.jabatan; ;`
        return db.execute(query)
        
}



module.exports = {getDataKarywanDb}