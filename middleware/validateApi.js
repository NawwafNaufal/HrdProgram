const dotenv = require("dotenv").config()

const validateApiKey = (req,res,next) => {
    const apikey =req.headers['x-api-key']
        const valdateApi = process.env.API_KEY
    if(apikey !== valdateApi) {
        return res.status(403).json({
            message : "Tidak Boleh Akses"
        })
    }
    next()
}

module.exports = validateApiKey