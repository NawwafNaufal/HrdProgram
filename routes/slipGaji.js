const express = require("express")
const routes = express.Router()
const {getslipGaji,patchSlipgaji} = require("../controller/slipGajiControl")

routes.route("/").get(getslipGaji)
routes.route("/:id_karyawan/:tanggal_mulai/:tanggal_akhir").post(patchSlipgaji);



module.exports = routes