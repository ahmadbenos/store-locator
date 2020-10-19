const express = require('express');
const router = express.Router();

const { loadPage, addStore } = require("../controllers/addStore")

router.route("/").get(loadPage).post(addStore);


module.exports = router;