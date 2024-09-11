const login = require("../models/loginDb")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
const loginVal = require("../validation/validationLogin")
const logger = require("../logs/winston")

const keytoken = process.env.JWT_KEY
const loginControl = async(req,res) => {
    const {username,password} = req.body
    try {
        const [result] = await login.loginDb(username,password)
        const cekData = loginVal(req.body)
        if(cekData.message.length > 0){
            logger.warn("Data Input Kosong")
            return res.status(400).json({
                message : cekData.message[0]
            })
        }
        if(result.length === 0){
            logger.info("Penggunna Tidak Di Temukan")
                return res.status(400).json({
                    message : "Pengguna Tidak di Temukan"
                })
            }
                const user = result[0]
                if(password !== user.password){
                    return res.json({
                        message : "Kata sandi anda salah Coy"
                    })
                }
                const payload = {
                    username : user.username
                }
                const jwtExpired = 60 * 60 * 1
                const jsonwebtoken = jwt.sign(payload,keytoken,{expiresIn : jwtExpired})
                console.log(jsonwebtoken)
        return res.status(200).json({
            token : jsonwebtoken,
            data : result,
            message : "Login Berhasil",
        }) 
        } catch (error) {
            logger.error("Terjadi Kesalahan Pada Server")
            return res.status(500).send("Terjadi Kesalahan Pada Server")
    }
}

module.exports = {loginControl}