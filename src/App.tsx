import React from "react";
import "./App.style.scss";
import { RealTimePrinting } from "./RealTimePrinting";

function App() {
  return (
    <RealTimePrinting
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      isReverse
    />
  );
}

export default App;
