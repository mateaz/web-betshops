import React from "react";
import "./App.css";
import { MapLeaflet } from "./components/Map";

const App: React.FC = () => {
  return (
    <div className="App h-screen w-screen">
      <MapLeaflet />
    </div>
  );
};

export default App;
