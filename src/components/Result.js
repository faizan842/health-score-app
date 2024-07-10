import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import emailjs from 'emailjs-com';

const Result = ({ formData }) => {
  const emailSent = useRef(false);

  // Calculate the BMI and Health Score here
  const heightInMeters = useMemo(() => ((parseInt(formData.heightFeet) * 12) + parseInt(formData.heightInches)) * 0.0254, [formData.heightFeet, formData.heightInches]);
  const bmi = useMemo(() => (formData.weightKg / (heightInMeters ** 2)).toFixed(2), [formData.weightKg, heightInMeters]);
  const idealWeight = useMemo(() => ((heightInMeters * heightInMeters) * 22).toFixed(1), [heightInMeters]);
  const weightDifference = useMemo(() => (formData.weightKg - idealWeight).toFixed(1), [formData.weightKg, idealWeight]);

  const bmiCategory = useCallback(() => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.99) return 'Normal';
    if (bmi >= 25 && bmi <= 29.99) return 'Overweight';
    return 'Obese';
  }, [bmi]);

  const healthScore = useCallback(() => {
    if (bmiCategory() === 'Normal') return 78; // This is an example. You can implement a more complex calculation
    return 50; // Example score for other categories
  }, [bmiCategory]);

  const sendEmail = useCallback(() => {
    const emailParams = {
      to_name: formData.name,
      to_email: formData.email,
      message: `
        Your Weight Report:
        As per your inputs, you are ${weightDifference} kg NORMAL.
        Your current weight is: ${formData.weightKg} kg.
        Your Ideal Body Weight should be: ${idealWeight} kg.

        Your B.M.I Report:
        As per your inputs, your B.M.I is ${bmi} kg/m².
        As per your B.M.I, you fall in ${bmiCategory()} Category.

        Your BN Health Score:
        Based on the above results, your ‘BN - Health Score’ is ${healthScore()}.
        VERY GOOD
      `,
    };

    emailjs.send(
      'your_service_id',
      'your_template_id',
      emailParams,
      'your_user_id'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });
  }, [formData, weightDifference, idealWeight, bmi, bmiCategory, healthScore]);

  useEffect(() => {
    if (!emailSent.current) {
      sendEmail();
      emailSent.current = true;
    }
  }, [sendEmail]);

  const bmiClassTable = (
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
          <td>30.00 - 39.99</td>
          <td>Moderate</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="result-container">
      <h2>wwww.dorganics.in</h2>
      <p>Here is an analysis of your weight, health & risk factors.</p>
      <p>The nutritionists at Dorganics have compiled a report for you with a ‘Unique Health Score’. Take a look :)</p>

      <h3>Your Weight Report</h3>
      <p>As per your inputs, you are {weightDifference} kg NORMAL.</p>
      <p>Your current weight is: {formData.weightKg} kg.</p>
      <p>Your Ideal Body Weight should be: {idealWeight} kg.</p>

      <h3>Your B.M.I Report</h3>
      <p>As per your inputs, your B.M.I is {bmi} kg/m².</p>
      <p>As per your B.M.I, you fall in {bmiCategory()} Category.</p>
      
      <h3>BMI Classification Table</h3>
      {bmiClassTable}

      <h3>Your BN Health Score</h3>
      <p>Based on the above results, your ‘BN - Health Score’ is {healthScore()}.</p>
      <p>VERY GOOD</p>

      <ul>
        <li>90-100 : Excellent</li>
        <li>71-89 : Very Good</li>
        <li>51-70 : Can Do Better</li>
        <li>31-50 : Needs Attention</li>
        <li>0-31 : Call Us NOW!</li>
      </ul>

      <h3>What Should You Do Now?</h3>
      <p>Start with a diet & lifestyle plan, even if it is a short term one. Take a look at wwww.dorganics.in & see Programs</p>
      <p>Drink 12 glasses of water, have only 1 tsp. visible sugar each day, 1 fruit & 1 raw vegetable a day.</p>
      <p>Speak to our Sr. Counsellor @ XXXXXXXXXX / XXXXXXXXXX who can help you with a personalized diet plan.</p>

      <h3>Need Assistance?</h3>
      <p>+91 XXXXXXXXXX / +91 XXXXXXXXXX</p>
      <p><a href="https://dorganics.in/" target="_blank" rel="noopener noreferrer">wwww.dorganics.in</a></p>
    </div>
  );
};

export default Result;
