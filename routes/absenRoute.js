const express = require('express');
const router = express.Router();
const { kategoriAbsenControl } = require('../controller/kategoriAbsenControl');
const { postAbsenControl } = require('../controller/AbsenControl');

router.route("/").post(kategoriAbsenControl).post(postAbsenControl);

module.exports = router;
