const express = require('express');
const router = express.Router();
const { postAbsenControl,putAbsenControl } = require('../controller/AbsenControl');

router.route("/").get(postAbsenControl);
router.route("/:id").put(putAbsenControl);

module.exports = router;
