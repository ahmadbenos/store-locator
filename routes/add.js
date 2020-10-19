const express = require('express');
const router = express.Router();

const { loadPage } = require("../controllers/addStore")

router.route("/").get(loadPage);


module.exports = router;