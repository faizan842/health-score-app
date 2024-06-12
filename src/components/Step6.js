import React from 'react';

const Step6 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  return (
    <div className="step-container">
      <h2>Step 6: Contact Information</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Step6;
