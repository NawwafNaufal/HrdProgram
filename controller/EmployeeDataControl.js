const  from = require("../models/employeeDataDb")


const getDataEmployeeControl = async (req,res) => {
    
}

const postDataEmployeeControl = async (req,res) => {
    const {jabatan,bagian,kelompok,id_kp,kontrak,keterangan_kontrak ,
            bpjs_kategori,awal_kontrak ,akhir_kontrak ,mulai_kerja,
            akhir_kerja,kpj,kode_bag ,nik,id_jenis
        } = req.body
    const [result] = await from.postEmployeeData(
            jabatan,bagian,kelompok,id_kp,
            kontrak,keterangan_kontrak,bpjs_kategori,
        awal_kontrak,akhir_kontrak,mulai_kerja,
        akhir_kerja,kpj,kode_bag,nik,id_jenis)
        res.status(200).json({
            data : result,
            message : "Data Berhasil Di Tambahkan"
        })
}

const putDataEmployeeControl = async (req,res) => {
    const {jabatan,bagian,kelompok,id_kp,
            kontrak,keterangan_kontrak,bpjs_kategori,
            awal_kontrak,akhir_kontrak,mulai_kerja,
            akhir_kerja,kpj,kode_bag,nik,id_jenis} 
        = req.body
    const {id} = req.params
    
    const result = await from.putEmployeeData(
                        jabatan,bagian,kelompok,id_kp,
                        kontrak,keterangan_kontrak,bpjs_kategori,
                        awal_kontrak,akhir_kontrak,mulai_kerja,
                        akhir_kerja,kpj,kode_bag,nik,id_jenis,id)
    res.status(200).json({
        data :result,
        message : "Data Telah Di Tambahkan"
    })
}

const deleteEmployeeData = async (req,res) => {
    try {
        const {id} = req.params
        const result = await from.deleteEmployeeData(id)
        res.status(200).json({
            data : result,
            message : "Data Telah Di Hapus"
        }) 
    } catch (error) {
        logger.error(`Ada Masalah Dengan Sistem: ${error.message}`, {error : error.stak})
        res.status(500).json({
            message : "Ada Masalah di Server"
        })
    }
}

module.exports = {postDataEmployeeControl,putDataEmployeeControl,deleteEmployeeData}