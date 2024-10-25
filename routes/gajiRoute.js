const express = require("express")
const routes = express.Router()
const {getGajiControl,postGajiControl,deleteGajiControl,putGajiControl} = require("../controller/gajiControl")

routes.route('/').get(getGajiControl).post(postGajiControl)
routes.route('/:id').delete(deleteGajiControl).patch(putGajiControl)



module.exports= routes