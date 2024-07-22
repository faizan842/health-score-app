import React, { useState } from 'react';
import './Step3.css';  // Import the CSS file

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const healthIssues = [
    'Constipation',
    'Low Immunity',
    'Body Ache',
    'Diarrhea',
    'Acidity',
    'None'
  ];

  const handleCheckboxChange = (issue) => {
    if (issue === 'None') {
      setFormData({ ...formData, healthIssues: ['None'] });
    } else {
      const updatedHealthIssues = formData.healthIssues.includes(issue)
        ? formData.healthIssues.filter(item => item !== issue)
        : [...formData.healthIssues.filter(item => item !== 'None'), issue];

      setFormData({ ...formData, healthIssues: updatedHealthIssues });
    }
  };

  const handleNext = () => {
    if (formData.healthIssues.length === 0) {
      setError('Please select at least one health issue.');
    } else {
      setError('');
      nextStep();
    }
  };

  // Group health issues into rows of three
  const healthIssueRows = [];
  for (let i = 0; i < healthIssues.length; i += 3) {
    healthIssueRows.push(healthIssues.slice(i, i + 3));
  }

  return (
    <div className="step-container">
      <h2>Step 3: Health Issues</h2>
      <p>Do You Currently Suffer From Any Of The Mentioned Health Issues?</p>
      <form>
        {healthIssueRows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map(issue => (
              <div key={issue} className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.healthIssues.includes(issue)}
                    onChange={() => handleCheckboxChange(issue)}
                  />
                  {issue}
                </label>
              </div>
            ))}
          </div>
        ))}

        {error && <p className="error">{error}</p>}

        {/* <button type="button" onClick={prevStep}>Back</button> */}
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step3;
