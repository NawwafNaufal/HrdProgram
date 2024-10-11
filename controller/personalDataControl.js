const form = require("../models/personalDataDb")
const logger = require("../logs/winston")
const flatpickr = require("flatpickr")
// const validate = require("../validation/validateForm")

const getPersonalData = async (req,res) => {
    try {
        const result = await form.getDataEmpployee()
            res.status(200).json({
                data : result,
                message : "Data Employee"
            }) 
    } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, {error : error.stak})
        res.status(500).json({
            message : "Ada Masalah di Server "
        })
    }
}

const postPersonalData = async (req,res) => {
    const  {nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
            tanggal_lahir,alamat,no_hp,usia,asal
    } = req.body
    try {
        logger.info("Data Karyawan Telah Di Tambahkan")
        const [result] = await form.postDataEmployee(
            nik,nama_karyawan,jenis_kelamin,
        pendidikan,id_status,tanggal_lahir,
            alamat,no_hp,usia,asal)
        res.status(200).json({
            data : result,
            message : "Data Berhasil ID Tambahkan"
        })
    } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, {error : error.stak})
        res.status(500).json({
            message : "Ada Masalah di Server "
        })
    }
}

const putPersonalData = async (req,res) => {
    try {
        const {nik,nama_karyawan,jenis_kelamin,pendidikan,id_status,
                tanggal_lahir,alamat,no_hp,usia,asal,
            } = req.body
        logger.info("Data Karyawan Telah Di Tambahkan")
        const {id} = req.params
        const [result] = await form.putPersonalData(
            nik,nama_karyawan,jenis_kelamin,
        pendidikan,id_status,tanggal_lahir,
            alamat,no_hp,usia,asal,id)
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



module.exports = {getPersonalData,postPersonalData,putPersonalData,deletePersonalData}

