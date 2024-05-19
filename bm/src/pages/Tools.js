import React, { useState } from 'react';
import './Tools.css';

const Tools = () => {
  // State to manage user input for carbon footprint calculation
  const [carMiles, setCarMiles] = useState('');
  const [busMiles, setBusMiles] = useState('');
  const [flightMiles, setFlightMiles] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Function to calculate carbon footprint
  const calculateCarbonFootprint = () => {
    // Calculate total miles traveled
    const totalMiles = parseFloat(carMiles) + parseFloat(busMiles) + parseFloat(flightMiles);
    // Assuming a standard carbon emission rate per mile
    const carbonEmissionPerMile = 0.42; // in kilograms (example value)
    // Calculate carbon footprint
    const footprint = totalMiles * carbonEmissionPerMile;
    setCarbonFootprint(footprint.toFixed(2)); // Limiting to 2 decimal places
  };

  // Function to reset input fields and carbon footprint
  const resetCalculator = () => {
    setCarMiles('');
    setBusMiles('');
    setFlightMiles('');
    setCarbonFootprint(null);
  };

  return (
    <div className="tools">
      <h2>Environmental Conservation Foundation</h2>
      <p>
        The Environmental Conservation Foundation (ECF) is deeply concerned about
        the state of our planet and is dedicated to fostering a culture of environmental
        stewardship. In an era marked by increasing environmental degradation and
        climate change, the need for widespread awareness and action is more
        critical than ever. Recognizing this urgent need, ECF is embarking on a mission
        to develop a simplified web application that serves as a beacon of
        environmental education and advocacy. This application aims to raise
        awareness about pressing environmental issues while empowering individuals
        to embrace sustainable living practices in their daily lives.
      </p>
      <h3>Tools</h3>
      <p>Here are some interactive tools to help you live more sustainably:</p>
      {/* Carbon footprint calculator */}
      <div className="carbon-calculator">
        <h4>Carbon Footprint Calculator</h4>
        <label>
          Car Miles:
          <input type="number" value={carMiles} onChange={(e) => setCarMiles(e.target.value)} />
        </label>
        <label>
          Bus Miles:
          <input type="number" value={busMiles} onChange={(e) => setBusMiles(e.target.value)} />
        </label>
        <label>
          Flight Miles:
          <input type="number" value={flightMiles} onChange={(e) => setFlightMiles(e.target.value)} />
        </label>
        <button onClick={calculateCarbonFootprint}>Calculate</button>
        <button onClick={resetCalculator}>Reset</button>
        {carbonFootprint !== null && (
          <p>Your estimated carbon footprint: {carbonFootprint} kg CO2</p>
        )}
      </div>
    </div>
  );
};

export default Tools;
