const db = require("../config/connection")

const getDataKarywanDb = () => {
    const query = `SELECT de.id, de.nama_karyawan,de.nik,jabatan.jabatan,de.jenis_kelamin,de.alamat 
                    FROM data_employee de JOIN jabatan ON (de.jabatan = jabatan.id);`
        return db.execute(query)
        
}



module.exports = {getDataKarywanDb}