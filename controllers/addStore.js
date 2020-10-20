const mongoose = require("mongoose");
const path = require("path");
const Store = require("../Models/Store");
const geocoder = require("../utils/geocoder")


exports.loadPage = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "add.html"))
}

exports.addStore = async (req, res) => {
  const {storeName, storeAddress, userLat, userLong} = req.body;
  console.log(`${storeName}
  lat: ${userLat}
  long: ${userLong}
  address: ${storeAddress}`);

  // if the user uses the address form(not 'use my location')
  if(!userLat && !userLong){
    try{
    const loc = await geocoder.geocode(storeAddress);
    const newStore = new Store({
     store_Name: storeName,
     longitude: loc[0].longitude,
     latitude: loc[0].latitude,
     address: storeAddress,
    }); 
    const savedStore = await newStore.save();
    res.redirect("/");
  }catch(error){
    console.log(error)
  }
 } 
  // if the user uses the 'use my location' form
  else if(userLong && userLat){
    try{
      const newStore = new Store({
       store_Name: storeName,
       longitude: userLong,
       latitude: userLat,
       address: storeAddress,
      }); 
      const savedStore = await newStore.save();
      res.redirect("/");
    }catch(error){
      console.log(error)
    }
  }
}