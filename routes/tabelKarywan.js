const {getDataControl} = require("../controller/tabelKaryawan")
const express = require("express")
const routes = express.Router()

routes.route("/").get(getDataControl)

module.exports = routes