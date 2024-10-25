const {logAbsensiRouteDb} = require("../models/logAbsensiRouteDb")

const logAbsensiRouteDbControl =async (req,res) => {
    const [result]  = await logAbsensiRouteDb()
        res.status(200).json({
            data : result,
            message : "Data Log Absensi"
        })
}

module.exports = {logAbsensiRouteDbControl}