import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import './styles/App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    heightFeet: '',
    heightInches: '',
    weightKg: '',
    age: '',
    bodyType: '',
    sleepDuration: '',
    smokeFrequency: '',
    alcoholFrequency: '',
    activityLevel: '',
    healthIssues: [],
    waterConsumption: '',
    fruitVegConsumption: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Your health score is ready! Check the console for details.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" alt="Logo" className="App-logo" /> {/* Add the logo */}
      </header>
      <div className="App-content">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 formData={formData} setFormData={setFormData} nextStep={handleSubmit} prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default App;
