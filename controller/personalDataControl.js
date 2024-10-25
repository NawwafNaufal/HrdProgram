const form = require("../models/dataEmployeeDb")
const logger = require("../logs/winston")
const flatpickr = require("flatpickr")
// const validate = require("../validation/validateForm")


const postPersonalData = async (req,res) => {
    const {nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
        tanggal_lahir,
        alamat,no_hp,usia,asal,jabatan,bagian,
        kelompok,kontrak,keterangan_kontrak,bpjs_kategori,
        awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,
        kpj,
        kode_bag,nik_kerja,id_jenis
    } = req.body

    // if (!tanggal_lahir || !awal_kontrak || !akhir_kontrak || !mulai_kerja || !akhir_kerja) {
    //     return res.status(400).json({
    //         message: "Tanggal tidak boleh kosong."
    //     });
    // }
    
    try {
        logger.info("Data Karyawan Telah Di Tambahkan")
        const [result] = await form.postDataEmployee(
            nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,
            alamat,no_hp,usia,asal,jabatan,bagian,
            kelompok,kontrak,keterangan_kontrak,bpjs_kategori,
            awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,
            kpj,
            kode_bag,nik_kerja,id_jenis)
        res.status(201).json({
            data : result,
            message : "Data Berhasil ID Tambahkan"
        })
    } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, {error : error.stack})
        res.status(500).json({
            message : "Ada Masalah di Server "
        })
    }
}

const putPersonalData = async (req,res) => {
    try {
        const {nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
                tanggal_lahir,alamat,no_hp,usia,asal,jabatan,bagian,
                kelompok,kontrak,keterangan_kontrak,bpjs_kategori
                ,awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,kpj,
                kode_bag,nik_kerja,id_jenis
            } = req.body
        logger.info("Data Karyawan Telah Di Tambahkan")
        const {id} = req.params
        const [result] = await form.putPersonalData(
            nik,nama_karyawan,jenis_kelamin,
        pendidikan,id_status,tanggal_lahir,
            alamat,no_hp,usia,asal,jabatan,bagian,
            kelompok,kontrak,keterangan_kontrak,bpjs_kategori
            ,awal_kontrak,akhir_kontrak,mulai_kerja,akhir_kerja,kpj,
            kode_bag,nik_kerja,id_jenis,id)
        res.status(201).json({
            data : result,
            message :"Data Telah Di Update"
        })
    } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, {error : error.stak})
        res.status(500).json({
            message : "Ada Masalah di Server "
        })
    } 
    }

const deletePersonalData = async (req,res) => {
    try {
        const { id } = req.params; // Mengambil ID dari parameter URL
        const result = await form.deleteData(id); // Menghapus data dari kedua tabel
        res.status(200).json({
          data: result,
          message: "Data Telah Dihapus",
        });
      } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, { error: error.stack });
        res.status(500).json({
          message: "Ada Masalah di Server",
        });
      }
}



module.exports = {postPersonalData,putPersonalData,deletePersonalData}

