const getDataAllDb = require("../models/allDataKaryawanDb")

const dataAllControl = async (req,res) => {
    const [result] = await getDataAllDb()
        res.status(200).json({
            message : "All Data Karyawan",
            data : result
        })
}

module.exports = dataAllControl