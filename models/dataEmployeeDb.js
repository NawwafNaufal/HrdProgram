const db = require("../config/connection")

const postDataEmployee =async (
  nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
  tanggal_lahir,
  alamat,no_hp,usia,asal,jabatan,bagian,
  kelompok,kontrak,keterangan_kontrak,bpjs_kategori,
  awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,
  kpj,
  kode_bag,nik_kerja,id_jenis
) => {
    const query = `INSERT INTO data_employee 
                    (nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
                    tanggal_lahir,alamat,no_hp,usia,asal,jabatan,bagian,
                    kelompok,kontrak,keterangan_kontrak,bpjs_kategori
                    ,awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,kpj,
                    kode_bag,nik_kerja,id_jenis) 
                    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    const value = [
      nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
      tanggal_lahir,
      alamat,no_hp,usia,asal,jabatan,bagian,
      kelompok,kontrak,keterangan_kontrak,bpjs_kategori,
      awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,
      kpj,
      kode_bag,nik_kerja,id_jenis
    ]
    return db.execute(query,value)
}

const putPersonalData = (
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal,jabatan,bagian,
            kelompok,kontrak,keterangan_kontrak,bpjs_kategori
            ,awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,kpj,
            kode_bag,nik_kerja,id_jenis,id
                ) => {
        const query = `UPDATE personal_data SET
                        nik = ?, nama_karyawan = ?, jenis_kelamin = ?, pendidikan = ?,
                        id_status = ?, tanggal_lahir = ?, alamat = ?, no_hp = ?, usia = ?, asal = ?,jabatan,bagian,
                        kelompok = ?,kontrak = ?,keterangan_kontrak = ?,bpjs_kategori = ?
                        ,awal_kontrak = ?,akhir_kontrak =?,mulai_kerja=?,akhir_kerja=?,kpj=?,
                        kode_bag=?,nik_kerja=?,id_jenis=?
                        WHERE id = ?`
        const value = [  
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal,jabatan,bagian,
            kelompok,kontrak,keterangan_kontrak,bpjs_kategori
            ,awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,kpj,
            kode_bag,nik_kerja,id_jenis,id
        ]
    return db.execute(query,value)
}

const deleteData = async (id) => {
      const query  = "DELETE FROM data_employee WHERE id = ?";
      return  db.execute(query,[id]) 
  };
  


module.exports = {postDataEmployee,putPersonalData,deleteData}
