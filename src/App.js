import React, { useMemo } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = React.useState(140);

  const [weight, setWeight] = React.useState(80);

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  const Bmi = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  }, [height, weight]);

  return (
    <main>
      <h1>Bmi Calculator</h1>
      <div className="inputSection">
        <div className="inputSection"></div>
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          onChange={onWeightChange}
          className="input-slider"
          type="range"
          value={weight}
          step={1}
          min={50}
          max={150}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          value={height}
          step={1}
          min={120}
          max={220}
        />
      </div>
      <div className="outputSection">
        <p>Your BMI is:</p>
        <p className="output">{Bmi}</p>
      </div>
    </main>
  );
};

export default App;
