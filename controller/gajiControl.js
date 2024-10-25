const gaji = require("../models/gajiDb")

const getGajiControl =async (req,res) => {
    const [result] = await gaji.getGajiDb()
        res.status(200).json({
            data : result,
            message : "Gaji Karyawan"
        })
}
const postGajiControl =async (req,res) => {
    const {jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir} = req.body
    try {
        if (!jabatan || !id_tipe || !gaji_harian || !gaji_lembur || !tanggal_mulai || !tanggal_akhir) {
            return res.status(400).json({ message: "Field tidak boleh kosong" });
        }
        const [result] = await gaji.postGajiDb(jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir)
            res.status(200).json({
                data : result,
                message : "Gaji Karyawan Telah di Tambahkan "
            })   
    } catch (error) {
        res.send(error)
    }
}
const deleteGajiControl =async (req,res) => {
    const {id} = req.params
    const [result] = await gaji.deleteGajiDb(id)
        res.status(200).json({
            data : result,
            message : "Gaji Karyawan"
        })
}
const putGajiControl =async (req,res) => {
    const {jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir} = req.body
    const {id} = req.params
    const [result] = await gaji.putGaji(jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir,id)
        res.status(200).json({
            data : result,
            message : "Update Succes"
        })
}

module.exports = {getGajiControl,postGajiControl,deleteGajiControl,putGajiControl}