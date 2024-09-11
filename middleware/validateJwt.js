const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

const validateJwt = (req,res,next) => {
    const headers = req.headers["authorization"]
        const compare = headers && headers.split("")[1]

        if(!compare){
            return res.send("Token Di Perlukan")
        }
        jwt.verify(compare,process.env.JWT_KEY,(err,result) => {
            if(err){
                return res.send("Token Invalid")
            }
            req.result = result
            next()
        })
        
    }

module.exports = validateJwt