import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <img src="./img.jpg" />
      <div className="Title">
        <h1> Xi Currency Converter </h1>
        <p>Check live forign currency exchange rates</p>
      </div>
      <Box/>
    </div>
  );
}

export default App;
