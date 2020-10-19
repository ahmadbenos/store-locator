const mongoose = require("mongoose");
const path = require("path");


exports.loadPage = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "add.html"))
}

exports.addStore = (req, res) => {
  const {storeName, storeAddress} = req.body;
  console.log(storeName+"\n"+storeAddress)
}