const totalEMployee = require("../models/totalEmployee")

const totalControl = async(req,res) => {
    const [result] = await totalEMployee()
    console.log(result)
        res.json({
            data : result
        })
} 

module.exports = {totalControl}