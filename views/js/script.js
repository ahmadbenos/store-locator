var mymap = L.map('mapid').setView([51.505, -0.09], 12);

// or using async function: 
async function getMap(){
    try{ 
 const data = await fetch(`${window.location.href}se_c_aplol`) 
 const res = await data.json(); 
 //console.log(res.key)
    

 L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${res.key}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: `${res.key}`
}).addTo(mymap);

}catch(err){ if(err) console.log(err)}


}

// call the function to retrieve the map
getMap();


async function getData(){
  const res = await fetch(`${window.location.href}getStores`);
  const stores = await res.json();
  //console.log(stores);
let allStores = stores.map(store => {
  return {
    "type": "Feature",
    "properties": {
        store_name: store.store_Name
    },
    "geometry": {
        "type": "Point",
        "coordinates": [store.longitude, store.latitude]
    }
}
})

console.log(allStores)
   

  //add the stores to the map
  let storesGeoJSON = {
    "type": "FeatureCollection",
    "features": allStores
  }
   
  L.geoJSON(storesGeoJSON, {
    onEachFeature: function(feature, layer){
        layer.bindPopup(`<p>${feature.properties.store_name}</p>`)
    }
  }).addTo(mymap)
}

//call the function to get all stores
getData();














