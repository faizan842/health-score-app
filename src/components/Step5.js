import React from 'react';
import './Step5.css'; // Ensure you import the CSS file

const Step5 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <h2>Step 5: Consumption Habits</h2>
      <form>
        <label>
          Consumption Of Water Per Day:
          <select
            value={formData.waterConsumption}
            onChange={(e) => setFormData({ ...formData, waterConsumption: e.target.value })}
          >
            <option value="">Select</option>
            <option value="< 4 glasses">{"< 4 glasses"}</option>
            <option value="4 - 6 glasses">4 - 6 glasses</option>
            <option value="6 - 12 glasses">6 - 12 glasses</option>
            <option value="12 > glasses">{"12 > glasses"}</option>
          </select>
        </label>
        <label>
          Consumption Of Fruits & Vegetables Per Day:
          <select
            value={formData.fruitVegConsumption}
            onChange={(e) => setFormData({ ...formData, fruitVegConsumption: e.target.value })}
          >
            <option value="">Select</option>
            <option value="None">None</option>
            <option value="1 - 2 servings">1 - 2 servings</option>
            <option value="3 - 4 servings">3 - 4 servings</option>
            <option value="4 > servings">{"4 > servings"}</option>
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

export default Step5;
