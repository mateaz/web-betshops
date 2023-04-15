import React from "react";
import "./App.css";
import { Layout } from "./components";

const App: React.FC = () => {
  return (
    <div className="App h-screen w-screen bg-lightgrey">
      <Layout />
    </div>
  );
};

export default App;
