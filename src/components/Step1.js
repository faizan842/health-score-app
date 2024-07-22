import React, { useState } from 'react';
import './Step1.css';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState('');

  const heightFeetOptions = Array.from({ length: 8 }, (_, i) => i);
  const heightInchesOptions = Array.from({ length: 12 }, (_, i) => i);
  const ageOptions = Array.from({ length: 100 }, (_, i) => i);

  const handleNext = () => {
    if (!formData.gender || !formData.heightFeet || !formData.heightInches || !formData.weightKg || !formData.age) {
      setError('All fields are required');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div className="step-container">
      <img src="/images/logo.png" alt="Logo" className="App-logo" />
      <h2>Step 1: Basic Information</h2>
      <p className="intro-text">
        Know your ideal weight, BMI & a score describing your current health status curated by the nutritionists at <a href="https://dorganics.in/" target="_blank" rel="noopener noreferrer">dorganics.in</a>
      </p>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Height:</label>
            <div className="height-inputs">
              <select
                value={formData.heightFeet}
                onChange={(e) => setFormData({ ...formData, heightFeet: e.target.value })}
              >
                <option value="">Feet</option>
                {heightFeetOptions.map(feet => (
                  <option key={feet} value={feet}>{feet}</option>
                ))}
              </select>
              <select
                value={formData.heightInches}
                onChange={(e) => setFormData({ ...formData, heightInches: e.target.value })}
              >
                <option value="">Inches</option>
                {heightInchesOptions.map(inches => (
                  <option key={inches} value={inches}>{inches}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={formData.weightKg}
              onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Age (years):</label>
            <select
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            >
              <option value="">Select</option>
              {ageOptions.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step1;
