const express = require("express");
const router = express.Router();
require("dotenv").config()

//NOTE: THIS ROUTE WAS MADE TO FETCH MY MAPBOX API AS A PRACTICE TO HIDE KEYS
// IN CLIENT SIDE JAVASCRIPT, I JUST DON'T LIKE PUTTING KEYS DIRECTLY IN THE CLIENTSIDE
// SO MAKING A WEIRD NAMED ROUTE THAT RETURNS THE KEY TO THE CLIENTSIDE IS KIND OF MORE SECURE 
// EVENTHOUGH A USER CAN VIEW THE CLIENTSIDE CODE AND JUST VISIT THE ROUTE AND GET THE KEY.

router.get("/", (req, res) =>{
    res.send({key: process.env.MAPBOX_API})
})

module.exports =router;