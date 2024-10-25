const express = require('express')
const routes = express.Router()
const {detailControl} = require("../controller/detailControl")

routes.route('/:id').get(detailControl)

module.exports = routes