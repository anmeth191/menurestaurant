import React from 'react';
import { GoogleMap , LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width:'100%',
    height:'100%'
};

const center = {

    
lat: 40.50996748622144,
lng:  -75.78374863348901
}

const  Geolocation = ()=> {
    
return(
       <LoadScript googleMapsApiKey='my apiKey goes Here'>
           <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
           ></GoogleMap>
           </LoadScript>  
)
}

export default Geolocation;