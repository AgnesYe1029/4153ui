import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Market Order">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Limit Order">
          After 'while, <em>Crocodile</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
