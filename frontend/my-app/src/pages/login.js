import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
<<<<<<< HEAD
  const [sentOtp, setSentOtp] = useState(null); // State to store the generated OTP
  const [step, setStep] = useState(1); // To control the flow of form (step 1 = email, step 2 = OTP)*/
  /*const response =  axios.post('http://127.0.0.1:3000/login',{ email:email },{
    headers: {
        'Content-Type': 'application/json', // Explicitly set the Content-Type
    },
});*/
=======
  const [sentOtp, setSentOtp] = useState(null); // State to store the OTP sent from the backend
  const [step, setStep] = useState(1); // Controls the form steps
>>>>>>> refs/remotes/origin/test

  // Function to send OTP request to the backend
  const sendOtp = async () => {
    try {
<<<<<<< HEAD
      const response =  axios.post('http://127.0.0.1:3000/login',{ email:email }, {headers: {
        'Content-Type': 'application/json', // Explicitly set the Content-Type
    }});
      setSentOtp(response.data.otp); // Set the sent OTP from the backend response
      setStep(2); // Move to step 2 (OTP input)
      console.log('OTP Sent:', response.data.otp); // OTP is sent from the backend to the email
=======
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      setSentOtp(response.data.otp); // Store the OTP sent from the backend
      console.log('OTP Sent:', response.data.otp); // Debugging log
>>>>>>> refs/remotes/origin/test
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  // Handle email submission
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setStep(2); // Immediately move to step 2
    sendOtp(); // Send OTP after moving to step 2
  };

  // Handle OTP verification
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (parseInt(otp) === sentOtp) {
      // OTP is correct
      console.log('OTP verified successfully');
      alert('Login successful!');
      // Proceed with additional login logic (e.g., redirect)
    } else {
      // OTP is incorrect
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className=" d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
      <div className="card p-4" style={{ width: '400px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', borderRadius: '15px', backgroundColor: '#fff' }}>
        <h2 className="text-center mb-4" style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>Login</h2>

        {step === 1 && (
          <form onSubmit={handleSubmitEmail}>
            <div className="form-group mb-3">
              <label htmlFor="email" style={{ fontWeight: '500', color: '#555' }}>Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: '8px', padding: '12px', borderColor: '#cfd8dc' }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '16px', backgroundColor: '#007bff', borderColor: '#007bff' }}
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <div>
            <div className="alert alert-success text-center" role="alert" style={{ fontSize: '14px', marginBottom: '20px' }}>
              OTP has been sent to your email: <strong>{email}</strong>
            </div>
            <form onSubmit={handleSubmitOtp}>
              <div className="form-group mb-3">
                <label htmlFor="otp" style={{ fontWeight: '500', color: '#555' }}>Enter OTP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  style={{ borderRadius: '8px', padding: '12px', borderColor: '#cfd8dc' }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success btn-block"
                style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '16px', backgroundColor: '#28a745', borderColor: '#28a745' }}
              >
                Verify OTP
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;