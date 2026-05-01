import React, { useState } from 'react';
import './StepCalculator.css'; // Optional CSS file

const StepCalculator = () => {
  const [stepHeight, setStepHeight] = useState('');
  const [stepDepth, setStepDepth] = useState('');
  const [totalHeight, setTotalHeight] = useState('');
  const [results, setResults] = useState({
    numSteps: 0,
    riserHeight: 0,
    treadDepth: 0,
    totalRun: 0,
    totalRise: 0
  });

  const calculateSteps = () => {
    const height = parseFloat(totalHeight);
    const riser = parseFloat(stepHeight);
    const tread = parseFloat(stepDepth);

    if (!height || !riser || !tread || height <= 0 || riser <= 0 || tread <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    const numSteps = Math.ceil(height / riser);
    const actualRiserHeight = height / numSteps;
    const totalRun = numSteps * tread;

    setResults({
      numSteps,
      riserHeight: actualRiserHeight,
      treadDepth: tread,
      totalRun,
      totalRise: height
    });
  };

  const resetForm = () => {
    setStepHeight('');
    setStepDepth('');
    setTotalHeight('');
    setResults({
      numSteps: 0,
      riserHeight: 0,
      treadDepth: 0,
      totalRun: 0,
      totalRise: 0
    });
  };

  return (
    <div className="step-calculator">
      <div className="container">
        <h1>🏠 Step Calculator</h1>
        <p>Calculate the perfect number of steps for your staircase</p>

        <div className="input-section">
          <div className="input-group">
            <label>Total Height to Rise (inches):</label>
            <input
              type="number"
              value={totalHeight}
              onChange={(e) => setTotalHeight(e.target.value)}
              placeholder="e.g., 96"
              step="0.1"
            />
          </div>

          <div className="input-group">
            <label>Desired Riser Height (inches):</label>
            <input
              type="number"
              value={stepHeight}
              onChange={(e) => setStepHeight(e.target.value)}
              placeholder="e.g., 7"
              step="0.1"
            />
          </div>

          <div className="input-group">
            <label>Tread Depth (inches):</label>
            <input
              type="number"
              value={stepDepth}
              onChange={(e) => setStepDepth(e.target.value)}
              placeholder="e.g., 11"
              step="0.1"
            />
          </div>

          <div className="button-group">
            <button className="calculate-btn" onClick={calculateSteps}>
              Calculate Steps
            </button>
            <button className="reset-btn" onClick={resetForm}>
              Reset
            </button>
          </div>
        </div>

        {results.numSteps > 0 && (
          <div className="results-section">
            <h2>📊 Results</h2>
            <div className="results-grid">
              <div className="result-item">
                <span className="label">Number of Steps:</span>
                <span className="value">{results.numSteps}</span>
              </div>
              <div className="result-item">
                <span className="label">Actual Riser Height:</span>
                <span className="value">{results.riserHeight.toFixed(2)}"</span>
              </div>
              <div className="result-item">
                <span className="label">Tread Depth:</span>
                <span className="value">{results.treadDepth}"</span>
              </div>
              <div className="result-item">
                <span className="label">Total Run:</span>
                <span className="value">{results.totalRun.toFixed(1)}"</span>
              </div>
              <div className="result-item">
                <span className="label">Total Rise:</span>
                <span className="value">{results.totalRise.toFixed(1)}"</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCalculator;