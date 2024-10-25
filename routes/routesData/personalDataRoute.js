const express = require("express")
const routes = express.Router()
const {getPersonalData,postPersonalData,putPersonalData,deletePersonalData} = require("../../controller/personalDataControl")

routes.route("/").post(postPersonalData)

routes.route("/:id").patch(putPersonalData).delete(deletePersonalData)

module.exports = routes

