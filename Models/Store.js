const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
store_Name: {type: String, required: true},
longitude: {type: Number, required: true},
latitude: {type: Number, required: true},
address: {type: String, required: false},
creationDate: {type: Date, default: Date.now()}
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store