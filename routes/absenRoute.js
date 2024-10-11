const express = require('express');
const router = express.Router();
const { postAbsenControl,putAbsenControl } = require('../controller/AbsenControl');

router.route("/:id").put(putAbsenControl);
router.route("/").get(postAbsenControl);

module.exports = router;
