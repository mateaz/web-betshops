import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BetshopContextProvider } from "./providers/selectedBetshopProvider";
import { MapBoundingBoxContextProvider } from "./providers/mapBoundingBoxProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MapBoundingBoxContextProvider>
      <BetshopContextProvider>
        <App />
      </BetshopContextProvider>
    </MapBoundingBoxContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
