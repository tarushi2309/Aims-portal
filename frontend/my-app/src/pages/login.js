import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState(null); // State to store the generated OTP
  const [step, setStep] = useState(1); // To control the flow of form (step 1 = email, step 2 = OTP)*/
  /*const response =  axios.post('http://127.0.0.1:3000/login',{ email:email },{
    headers: {
        'Content-Type': 'application/json', // Explicitly set the Content-Type
    },
});*/

  // Function to send OTP request to backend
  const sendOtp = async () => {
    try {
      const response =  axios.post('http://127.0.0.1:3000/login',{ email:email }, {headers: {
        'Content-Type': 'application/json', // Explicitly set the Content-Type
    }});
      setSentOtp(response.data.otp); // Set the sent OTP from the backend response
      setStep(2); // Move to step 2 (OTP input)
      console.log('OTP Sent:', response.data.otp); // OTP is sent from the backend to the email
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    sendOtp();
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (parseInt(otp) === sentOtp) {
      // OTP is correct, proceed with login logic
      console.log('OTP verified successfully');
      // Redirect or perform other login actions here
    } else {
      // OTP is incorrect
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '400px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#fff' }}>
        <h2 className="text-center mb-4" style={{ color: 'Black', fontFamily: 'Arial, sans-serif' }}>Login</h2>
        {step === 1 && (
          <form onSubmit={handleSubmitEmail}>
            <div className="form-group mb-3">
              <label htmlFor="email" style={{ fontWeight: '500' }}>Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: '8px', padding: '12px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '16px' }}>Send OTP</button>
          </form>
        )}

        {step === 2 && (
          <div>
            <p className="text-center mb-4" style={{ color: '#555' }}>OTP has been sent to your email: {email}</p>
            <form onSubmit={handleSubmitOtp}>
              <div className="form-group mb-3">
                <label htmlFor="otp" style={{ fontWeight: '500' }}>Enter OTP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  style={{ borderRadius: '8px', padding: '12px' }}
                />
              </div>
              <button type="submit" className="btn btn-success btn-block" style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '16px' }}>Verify OTP</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;