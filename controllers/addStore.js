const mongoose = require("mongoose");
const path = require("path");


exports.loadPage = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "add.html"))
}

exports.addStore = (req, res) => {
  const {storeName, userLat, userLong} = req.body;
  console.log(`${storeName}: lat: ${userLat} and long: ${userLong}`);

}