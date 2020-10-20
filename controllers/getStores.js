const mongoose = require("mongoose");
const Store = require("../Models/Store");

module.exports = {
    getStores: (req, res) => {
Store.find({}).then((stores) => {
    res.send(stores);
    console.log(stores);
}).catch(err => console.log(err))
    }
}