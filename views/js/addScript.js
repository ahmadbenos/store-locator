const btn = document.getElementById("location-btn");

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const userLocation = navigator.geolocation;
    if(userLocation){
        console.log("User allowed access");
        userLocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
        })
    } else { 
        console.log("User denied access")
    }
})