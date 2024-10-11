const express = require("express")
const routes = express.Router()
const {totalControl} = require("../controller/totalEMployeeControl")

routes.route("/").get(totalControl)

module.exports = routes