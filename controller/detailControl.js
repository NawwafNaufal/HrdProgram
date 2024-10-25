const {detailDB} = require("../models/popUpDetailDb")

const detailControl =async (req,res) => {
    const [result] = await detailDB()
    try {
        res.status(200).json({
            data : result,
            message : "Detail"
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {detailControl}