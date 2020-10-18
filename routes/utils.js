const express = require("express");
const router = express.Router();
require("dotenv").config()

router.get("/", (req, res) =>{
    res.send({key: process.env.MAPBOX_API})
})

module.exports =router;