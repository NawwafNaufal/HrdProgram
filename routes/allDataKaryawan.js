const express = require("express")
const routes = express.Router()
const dataAllControl = require("../controller/dataAllControl") 

routes.route("/").get(dataAllControl)

module.exports = routes