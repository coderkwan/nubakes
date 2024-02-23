"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ location }) => {
    const mapStyles = {
        height: "400px",
        width: "100%",
    };

    const defaultCenter = {
        lat: location.lat,
        lng: location.lng,
    };

    return (
        <LoadScript googleMapsApiKey="">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
