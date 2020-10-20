const mongoose = require("mongoose");
const Store = require("../Models/Store");

module.exports = {
    getStores: (req, res) => {
Store.find({}).then((stores) => {
      const allStores = stores.map(store => {
          return {
              store_Name: store.store_Name,
              longitude: store.longitude,
              latitude: store.latitude
          }
      })
    res.send(allStores);
    //console.log(stores[0]);
}).catch(err => console.log(err))
    }
}