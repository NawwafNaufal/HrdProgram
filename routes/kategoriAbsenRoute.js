const express = require("express")
const routes = express.Router()
const {kategoriAbsenControl} = require("../controller/absenKategori")

routes.route("/").get(kategoriAbsenControl)


module.exports = routes