import "./App.css";
import img_Header from "./bg-header-desktop.svg";
import Components from "./Design.js";
import Data from "./data.json";
import { useState } from "react";

function App() {
  // const State = () => {
  const [elem, setElem] = useState(0);
  const inc = () => {
    if (elem < Data.length - 1) setElem(elem + 1);
  };
  const dec = () => {
    if (elem > 0) setElem(elem - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={img_Header} />
      </header>
      <body className="App-Body">
        <Components data={Data[elem]} />

        <div class="Buttons">
          <button onClick={dec}> previous </button>
          <button onClick={inc}> next </button>
        </div>
      </body>
    </div>
  );
  // };
}

export default App;
