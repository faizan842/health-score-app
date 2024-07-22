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
                value="TRIANGLE"
                checked={formData.bodyType === 'TRIANGLE'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/TRIANGLE.png" alt="Triangle" />
            </label>
            <label>
              <input
                type="radio"
                value="RECTANGLE"
                checked={formData.bodyType === 'RECTANGLE'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/RECTANGLE.png" alt="Rectangle" />
            </label>
            <label>
              <input
                type="radio"
                value="APPLE"
                checked={formData.bodyType === 'APPLE'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/APPLE.png" alt="Apple" />
            </label>
            <label>
              <input
                type="radio"
                value="HOURGLASS"
                checked={formData.bodyType === 'HOURGLASS'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/HOURGLASS.png" alt="Hourglass" />
            </label>
            <label>
              <input
                type="radio"
                value="PEAR"
                checked={formData.bodyType === 'PEAR'}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
              />
              <img src="/images/PEAR.png" alt="Pear" />
            </label>
          </div>
        </div>

        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Step2;
