const {postJabatanDb} = require("../models/jabatanDb")


const jabatanControl = async (req,res) => {
    const {jabatan} = req.body
    if(!jabatan) {
        return res.send("Colom Tidak Boleh Kosong")
    }
    const [result] = await postJabatanDb(jabatan)
        res.status(200).json({
            data : result ,
            message : "Data Jabatan Berhasil Di Tambahkan"
        })
}

module.exports = {jabatanControl}