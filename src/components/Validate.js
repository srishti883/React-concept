import React, { useState } from 'react';

const Validation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Define a regular expression for a valid phone number
    const phoneRegex = /^\d{10}$/;

    // Validate the phone number against the regex
    setIsValidPhoneNumber(phoneRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the phone number is valid before submitting the form
    if (isValidPhoneNumber) {
      // Process the form submission
      console.log('Form submitted successfully!');
    } else {
      console.log('Invalid phone number. Please correct the input.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      {!isValidPhoneNumber && (
        <div style={{ color: 'red' }}>Invalid phone number. Please enter 10 digits.</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Validation;
