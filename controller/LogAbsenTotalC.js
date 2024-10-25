const {logAbsensiTotal} = require("../models/logAbsensiTotal")

const logAbsensiRouteControl =async (req,res) => {
    const [result]  = await logAbsensiTotal()
        res.status(200).json({
            data : result,
            message : "Data Log Absensi"
        })
}

module.exports = {logAbsensiRouteControl}