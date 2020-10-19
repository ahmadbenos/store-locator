const btn = document.getElementById("location-btn");

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const userLocation = navigator.geolocation;
    if(userLocation){
        userLocation.getCurrentPosition((position) => {
            console.log("User allowed access");
            console.log(position.coords.latitude);
        }, (error) => console.log("User denied Access"))
    } else { 
        console.log("Geolocation is not supported on your browser")
    }
})