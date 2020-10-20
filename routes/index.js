const express = require('express');
const router = express.Router();

const {getStores} = require("../controllers/getStores");

router.get("/", async (req, res) =>{
    await res.sendFile(path.join(__dirname, "views", "index.html"));
})

router.route("/getStores").get(getStores);


module.exports = router;