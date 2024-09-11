const form = require("../models/formDb")
const logger = require("../logs/winston")
const flatpickr = require("flatpickr")

const getForm = async (req,res) => {
    const result = await form.getDataEmpployee()
        res.status(200).json({
            data : result,
            message : "Data Employee"
        })
}

const postForm = async (req,res) => {
    const  {nama_karyawan,
        nik,
        jenis_kelamin,
        pendidikan,
        tanggal_masuk,
        tanggal_lahir,
        id_status,
        awal_kontrak,
        akhir_kontrak,
        alamat
    } = req.body
    try {
        logger.info("Data Karyawan Telah Di Tambahkan")
        const [result] = await form.postDataEmployee(
            nama_karyawan,
            nik,
            jenis_kelamin,
            pendidikan,
            tanggal_masuk,
            tanggal_lahir,
            id_status,
            awal_kontrak,
            akhir_kontrak,
            alamat)
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




module.exports = {getForm,postForm}

