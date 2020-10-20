const btn = document.getElementById("location-btn");
const locationForm = document.getElementById("location-form")
const locForm = document.getElementById("loc-form")

btn.addEventListener("click", async (e)=>{
    e.preventDefault()
    const userLocation = navigator.geolocation;
    if(userLocation){
         userLocation.getCurrentPosition( async (position) => {
            //! access granted
            console.log("User allowed access"); 
            const Latitude = await position.coords.latitude;
            const Longitude = await position.coords.longitude;
            console.log(position.coords.latitude);

            // Create two invisible inputs for longitude and latitude
            const userLat = document.createElement("input");
            const userLong = document.createElement("input");
            userLat.name = "userLat";
            userLong.name = "userLong";
            locForm.appendChild(userLat);
            locForm.appendChild(userLong);
             userLat.value = Latitude;
             userLong.value = Longitude;
            userLat.style.display = "none";
            userLong.style.display = "none";
            locationForm.submit();
        }, (error) => console.log("User denied Access")) //!access denied
    } else { 
        console.log("Geolocation is not supported on your browser")
    }
})