import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Result from './components/Result';
import './styles/App.css';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
    setStep(step + 1);
  };

  return (
    <div className="App">
      <div className='main'>
      <header className="App-header">
        {/* <img src="/images/logo.png" alt="Logo" className="App-logo" /> */}
        <video autoPlay muted loop id="background-video">
            <source src="Videos/workout video .mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </header>
      <div className="App-content">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <Step6 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
        {step === 7 && <Result formData={formData} />}
      </div>
      </div>
      <Footer />
      {/* <footer className="App-footer">
        <p>&copy; 2024 Dorganics. All rights reserved.</p>
        <p>Need Assistance? Call us at +91 XXXXXXXXXX / +91 XXXXXXXXXX</p>
        <p><a href="https://dorganics.in/" target="_blank" rel="noopener noreferrer">www.dorganics.in</a></p>
      </footer> */}
    </div>
  );
};

export default App;
