const db = require("../config/connection")

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

const deleteData = async (id) => {
    const connection = await db.getConnection(); // Mendapatkan koneksi dari pool
    try {
      await connection.beginTransaction(); // Memulai transaksi
  
      // Hapus dari personal_data
      await connection.execute("DELETE FROM employee_data WHERE id = ?", [id]);
      
      // Hapus dari employee_data
      await connection.execute("DELETE FROM personal_data WHERE id = ?", [id]);
  
      await connection.commit(); // Menyimpan perubahan
      return { success: true }; 
    } catch (error) {
      await connection.rollback(); // Mengembalikan perubahan jika ada kesalahan
      throw error; // Meneruskan kesalahan
    } finally {
      connection.release(); // Melepaskan koneksi
    }
  };
  


module.exports = {postDataEmployee,putPersonalData,deleteData}
