var mymap = L.map('mapid').setView([51.505, -0.09], 12);

// or using async function: 
async function getData(){
    try{ 
 const data = await fetch(`${window.location.href}se_c_aplol`) 
 const res = await data.json(); 
 console.log(res.key)
    

 L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${res.key}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: `${res.key}`
}).addTo(mymap);

}catch(err){ if(err) console.log(err)}


const myGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            35.80169677734375,
            34.023071367612125
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            title: "2nd store"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            36.05987548828124,
            34.15954545771158
          ]
        }
      }
    ]
  }

  L.geoJSON(myGeoJSON, {
      onEachFeature: function(feature, layer){
          layer.bindPopup(`<p>${feature.properties.title}</p>`)
      }
  }).addTo(mymap)

}

// call the function
getData();


 












