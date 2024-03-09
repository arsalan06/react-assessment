import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";
const defaultProps = {
  center: {
    lat: -14.95005,
    lng: 39.744137,
  },
  zoom: 9,
};
function GoogleMap() {
  return (
    <Box sx={{ height: "50vh", width: "100%", mt: 4 }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBeKIBwGWoUdoBQejU0vJx7Jah3pzX8_50",
        }}
        // id="__googleMapsScriptId"
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      />
    </Box>
  );
}

export default GoogleMap;
