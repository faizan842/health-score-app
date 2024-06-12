import React from 'react';
import './Result.css'; // Ensure you import the CSS file for styling

const Result = ({ formData }) => {
  const { weightKg, heightFeet, heightInches } = formData;

  const heightInMeters = ((parseInt(heightFeet) * 12 + parseInt(heightInches)) * 0.0254).toFixed(2);
  const bmi = (weightKg / (heightInMeters * heightInMeters)).toFixed(2);
  const idealWeight = (22.5 * (heightInMeters * heightInMeters)).toFixed(1);
  const weightDifference = (weightKg - idealWeight).toFixed(1);
  const healthScore = 78; // Example health score

  const bmiCategory = bmi < 18.5 ? "Underweight" :
                      bmi < 25 ? "NORMAL" :
                      bmi < 30 ? "Overweight" :
                      "Obese";

  return (
    <div className="result-container">
      <h2>www.balancenutrition.in</h2>
      <p>Here is an analysis of your weight, health & risk factors.</p>
      <p>The nutritionists at Balance Nutrition have compiled a report for you with a ‘Unique Health Score’. Take a look :)</p>

      <h3>Your Weight Report</h3>
      <p>As per your inputs, you are {weightDifference} kg NORMAL.</p>
      <p>Your current weight is: {weightKg} kg.</p>
      <p>Your Ideal Body Weight should be: {idealWeight} kg.</p>

      <h3>Your B.M.I Report</h3>
      <p>As per your inputs, your B.M.I is {bmi} kg/m<sup>2</sup>.</p>
      <p>As per your B.M.I, you fall in {bmiCategory} Category.</p>
      <p>*BMI Classification Table</p>

      <h3>Your BN Health Score</h3>
      <p>Based on the above results, your ‘BN - Health Score’ is: {healthScore}</p>
      <p>{healthScore >= 90 ? "EXCELLENT" :
          healthScore >= 71 ? "VERY GOOD" :
          healthScore >= 51 ? "Can Do Better" :
          healthScore >= 31 ? "Needs Attention" :
          "Call Us NOW!"}</p>

      <ul>
        <li>90-100 : Excellent</li>
        <li>71-89 : Very Good</li>
        <li>51-70 : Can Do Better</li>
        <li>31-50 : Needs Attention</li>
        <li>0-31 : Call Us NOW!</li>
      </ul>

      <h3>What Should You Do Now?</h3>
      <p>Start with a diet & lifestyle plan, even if it is a short-term one. Take a look at <a href="https://www.balancenutrition.in" target="_blank" rel="noopener noreferrer">www.balancenutrition.in</a> & see Programs</p>
      <p>Drink 12 glasses of water, have only 1 tsp. visible sugar each day, 1 fruit & 1 raw vegetable a day.</p>
      <p>Speak to our Sr. Counsellor @ 9820455544 / 9152419847 who can help you with a personalized diet plan.</p>

      <h3>Need Assistance?</h3>
      <p>+91 9820455544 / +91 9152419847</p>
      <p><a href="https://www.balancenutrition.in" target="_blank" rel="noopener noreferrer">www.balancenutrition.in</a></p>

      <h3>BMI Classification Table</h3>
      <table>
        <thead>
          <tr>
            <th>Classification</th>
            <th>BMI</th>
            <th>Risk of co-morbidities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underweight</td>
            <td>&lt; 18.40</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18.50 - 24.99</td>
            <td>Average</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25.00 - 29.99</td>
            <td>Increased</td>
          </tr>
          <tr>
            <td>Obese</td>
            <td>&gt; 30.00</td>
            <td>Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
