const express = require("express");
const dotenv = require("dotenv").config()
const db = require("../config/connection")
const validateApiKey = require("../middleware/validateApi")
const validateJwt = require("../middleware/validateJwt")
const cors = require('cors');
const {logger} = require("../logs/logs")

const app = express()
app.use(cors());
app.use(express.json())
app.use(logger)
const PORT = process.env.PORT

app.use("/Login",require("../routes/loginRoute"))
app.use("/PersonalData",require("../routes/routesData/personalDataRoute"))
app.use("/EmployeeData",require("../routes/routesData/employeeDataRoute"))
app.use("/Jabatan",require("../routes/jabatanRoute"))
app.use("/Absen",require("../routes/absenRoute"))
app.use("/DataKaryawan",require("../routes/tabelKarywan"))
app.use("/FullDAta",require("../routes/allDataKaryawan"))
app.use("/Kategori",require("../routes/kategoriAbsenRoute"))


app.listen(PORT,()=> {
    console.log(`Connect In Port`,{PORT})
})

