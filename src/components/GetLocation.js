import React from 'react'

export const GetLocation = () => {
    const getLocation=()=>{
        console.log("fdas")
        navigator.geolocation.watchPosition((position) => {
           
            var gps_location = position.coords.latitude + "," + position.coords.longitude;
            console.log( "gps_location : " + JSON.stringify(gps_location));
          }, {
              enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
            });
        
    }
    
  return (
    <div>
        <button onSubmit={getLocation()}>Get location</button>
    </div>
  )
}
