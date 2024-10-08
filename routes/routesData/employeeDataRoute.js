const express = require("express")
const routes = express.Router()
const {postDataEmployeeControl,putDataEmployeeControl,deleteEmployeeData} = require("/ProgramHrd/controller/EmployeeDataControl")

routes.route("/").post(postDataEmployeeControl)
routes.route("/:id").put(putDataEmployeeControl).delete(deleteEmployeeData)


module.exports = routes;