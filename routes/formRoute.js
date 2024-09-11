const express = require("express")
const routes = express.Router()
const {getForm,postForm} = require("../controller/formControl")

routes.route("/").get(getForm).post(postForm)

module.exports = routes

