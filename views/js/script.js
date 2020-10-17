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




}

// call the function
getData();











/* fetch(`${window.location.href}se_c_aplol`).then((res) => {
   res.json().then(key => {
       apiKey.push(key.key)
       console.log(apiKey[0])
})
}).catch(err => console.log(err)) */