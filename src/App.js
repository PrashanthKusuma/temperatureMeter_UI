import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [temperature, setTemperature] = useState(20);

  const [color, setColor] = useState({
    backgroundColor: "#00FF00"
  });

  function Increase() {
    setTemperature(temperature + 1);
    if (temperature >= 25) {
      setColor({
        backgroundColor: "#FF0000"
      });
    } else if (temperature < 25 && temperature > 15) {
      setColor({
        backgroundColor: "#00FF00"
      });
    }
  }
  const Decrease = () => {
    setTemperature(temperature - 1);
    if (temperature <= 15) {
      setColor({
        backgroundColor: "#0000FF"
      });
    } else if (temperature > 15 && temperature < 24) {
      setColor({
        backgroundColor: "#00FF00"
      });
    }
  };

  return (
    <div className="App" id="App" style={color}>
      <h1 className="circle">{temperature}°C</h1>
      <input type="button" onClick={Increase} value="+" className="btn" />
      <input type="button" onClick={Decrease} value="-" className="btn" />
    </div>
  );
};

export default App;
