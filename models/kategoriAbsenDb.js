const db = require("../config/connection")

const kategoriAbsenDb = () => {
    const query = `SELECT pd.id,pd.nama_karyawan,jb.jabatan,st.status
                    FROM absen_karyawan ab
                    JOIN status_absen st ON ab.id_status = st.id
                    JOIN personal_data pd ON ab.id_nama = pd.id
                    JOIN jabatan jb ON ab.id_jabatan = jb.id
                    WHERE jabatan = 'Manager';`
        return db.execute(query)
}

module.exports =  {kategoriAbsenDb}