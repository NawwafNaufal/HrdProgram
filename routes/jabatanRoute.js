const express = require("express")
const routes = express.Router()
const {jabatanControl} = require("../controller/jabatanDataControl")

routes.route("/").post(jabatanControl)


module.exports = routes