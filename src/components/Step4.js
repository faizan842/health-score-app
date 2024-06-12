import React from 'react';
import './Step4.css'; // Ensure you import the CSS file

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <h2>Step 4: Lifestyle Habits</h2>
      <form>
        <label>
          Duration of Sleep:
          <select
            value={formData.sleepDuration}
            onChange={(e) => setFormData({ ...formData, sleepDuration: e.target.value })}
          >
            <option value="">Select</option>
            <option value="less than 6 hours">Less than 6 hours</option>
            <option value="6-8 hours">6-8 hours</option>
            <option value="more than 8 hours">More than 8 hours</option>
          </select>
        </label>
        <label>
          How Often Do You Smoke?
          <select
            value={formData.smokeFrequency}
            onChange={(e) => setFormData({ ...formData, smokeFrequency: e.target.value })}
          >
            <option value="">Select</option>
            <option value="never">Never</option>
            <option value="occasionally">Occasionally</option>
            <option value="regularly">Regularly</option>
          </select>
        </label>
        <label>
          How Often Do You Consume Alcohol?
          <select
            value={formData.alcoholFrequency}
            onChange={(e) => setFormData({ ...formData, alcoholFrequency: e.target.value })}
          >
            <option value="">Select</option>
            <option value="never">Never</option>
            <option value="occasionally">Occasionally</option>
            <option value="regularly">Regularly</option>
          </select>
        </label>
        <label>
          Daily Activity Level:
          <select
            value={formData.activityLevel}
            onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
          >
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly active</option>
            <option value="active">Active</option>
            <option value="very active">Very active</option>
          </select>
        </label>
        <div>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
