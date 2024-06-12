import React from 'react';
import './Step2.css';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <h2>Step 2: Body Type</h2>
      <form>
        <div className="form-group">
          <label>Body Type:</label>
          <div className="body-type-options">
            <label>
              <input
                type="radio"
                value="oval"
                checked={formData.bodyType === 'oval'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/oval.png" alt="Oval" />
            </label>
            <label>
              <input
                type="radio"
                value="square"
                checked={formData.bodyType === 'square'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/square.png" alt="Square" />
            </label>
            <label>
              <input
                type="radio"
                value="triangular"
                checked={formData.bodyType === 'triangular'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/triangular.png" alt="Triangular" />
            </label>
          </div>
        </div>

        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Step2;
