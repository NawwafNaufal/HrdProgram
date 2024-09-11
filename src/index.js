const express = require("express");
const dotenv = require("dotenv").config()
const db = require("../config/connection")
const validateApiKey = require("../middleware/validateApi")
const validateJwt = require("../middleware/validateJwt")
const cors = require('cors');
const {logger} = require("../logs/logs")
const google = require("googleapis")

const app = express()
app.use(cors());
app.use(express.json())
app.use(logger)
const PORT = process.env.PORT

app.use("/Login",require("../routes/loginRoute"))
app.use("/FromEmployee",require("../routes/formRoute"))

app.listen(PORT,()=> {
    console.log(`Connect In Port`,{PORT})
})

