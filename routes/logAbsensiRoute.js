const express = require("express")
const routes = express.Router()
const {logAbsensiRouteDbControl} = require("../controller/logAbsensiRouteDbControl")

routes.route("/").get(logAbsensiRouteDbControl)

module.exports = routes