const express = require("express")
const routes = express.Router()
const {logAbsensiRouteControl} = require("../controller/LogAbsenTotalC")

routes.route("/").get(logAbsensiRouteControl)

module.exports = routes