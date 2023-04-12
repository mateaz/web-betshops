/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

// const position: number[] = [51.505, -0.09];
export const MapLeaflet: React.FC = () => {
  /*   const findMe = () => {
    let circle = {};
    let newRadius = 0;
    let latlon = [];
    mapRef.target
      .locate()
      .once("locationfound", function (e) {
        if (positionMarker) mapRef.target.removeLayer(positionMarker);
        mapRef?.target.flyToBounds(e.bounds);
        latlon = [e?.latitude, e?.longitude];
        newRadius = e?.accuracy / 2;
        circle = L.circle(latlon, 1, {
          weight: 1,
          color: "blue",
          fillColor: "#cacaca",
          fillOpacity: 0.2,
        });
        mapRef.target.addLayer(circle);
      })
      .once("moveend zoomend", () => {
        let interval = setInterval(() => {
          let currentRadius = circle.getRadius();
          if (currentRadius < newRadius) {
            circle.setRadius(currentRadius + 3);
          } else {
            clearTimeout(interval);
            mapRef.target.removeLayer(circle);
            let circleMarker = L.circle(latlon, {radius: 50});
            setPositionMarker(circleMarker);
            mapRef.target.addLayer(circleMarker);
          }
        }, 1);
      });
  }; */

  /*   useEffect(() => {
    const resizeMap = () => {
      if (mapRef.target) {
        setTimeout(function () {
          mapRef.target.invalidateSize();
        }, 400);
      }
    };

    window.addEventListener("resize", resizeMap); */

  // Start guide on render
  /*     let mapGuideState = JSON.parse(localStorage.getItem("mapGuideFinished"));
    if (!mapGuideState) {
      setAppState((prev) => {
        return {
          ...prev,
          run: true && prev.enabled,
          tourActive: true,
          steps: stepsMap,
          stepIndex: 0,
        };
      });
    } else {
      setAppState((prev) => {
        return {...prev, steps: stepsMap};
      });
    }

    return () => {
      window.removeEventListener("resize", resizeMap);
    };
  }, [mapRef]); */

  return (
    <div className="font-roboto relative h-screen w-screen overflow-hidden">
      <div className="z-0 h-screen w-screen overflow-hidden">
        <MapContainer
          center={[44.436141, 26.10272]} // staviti u neku varijablu van
          zoom={7} // staviti u neku varijablu van
          maxZoom={13} // staviti u neku varijablu van
          minZoom={6} // staviti u neku varijablu van
          // zoomControl={false}
          className="h-screen w-[25rem] border-2 border-white" // postaviti visinu
          // whenReady={setMapRef}
          maxBounds={[
            [43.44, 20.26],
            [48.27, 31.41],
          ]} // staviti u neku varijablu van
        >
          {/*     <div className="relative wrapper">
              <ZoomControl position="topright" />
              <div className="parent-position-download-btn absolute block mr-2.5 ">
                <button
                  title="Find me"
                  className="position-download-btn block w-10 h-10 bg-white hover:bg-blue-100"
                 // onClick={findMe}
                >
                  <Position />
                </button>
                
              </div>
            </div> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};
