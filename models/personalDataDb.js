const db = require("../config/connection")

const getDataEmployee = () => {
    const query = "SELECT * FROM personal_data "
        return db.execute(query)
}

const postDataEmployee =async (
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal
) => {
    const query = `INSERT INTO personal_data 
                    (nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
                    tanggal_lahir,alamat,no_hp,usia,asal) 
                    VALUES (?,?,?,?,?,?,?,?,?,?)`
    const value = [
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal
    ]
    return db.execute(query,value)
}

const putPersonalData = (
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal,id
                ) => {
        const query = `UPDATE personal_data SET
                        nik = ?, nama_karyawan = ?, jenis_kelamin = ?, pendidikan = ?,
                        id_status = ?, tanggal_lahir = ?, alamat = ?, no_hp = ?, usia = ?, asal = ? 
                        WHERE id = ?`
        const value = [  
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal,id
        ]
    return db.execute(query,value)
}

const deletePersonalData = (id) => {
    const query = "DELETE FROM personal_data WHERE id = ?  "
    return db.execute(query,[id])
}


module.exports = {getDataEmployee,postDataEmployee,putPersonalData,deletePersonalData}
