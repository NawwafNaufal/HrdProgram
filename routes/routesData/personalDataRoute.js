const express = require("express")
const routes = express.Router()
const {getPersonalData,postPersonalData,putPersonalData,deletePersonalData} = require("/ProgramHrd/controller/personalDataControl")

routes.route("/").get(getPersonalData).post(postPersonalData)

routes.route("/:id").put(putPersonalData).delete(deletePersonalData)

module.exports = routes

