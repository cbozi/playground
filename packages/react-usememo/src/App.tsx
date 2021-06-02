import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [propA] = useState("A");
  const [propB] = useState("B");

  return (
    <div className="App">
      <Todos propA={propA} propB={propB}></Todos>
    </div>
  );
}

export default App;
