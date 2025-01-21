import React, { useState } from 'react';

function SignUp() {
  const [role, setRole] = useState(''); // Track the selected role
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState(''); // For students only
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState(''); // For students only
  const [degree, setDegree] = useState(''); // For students only
  const [year, setYear] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [otp, setOtp] = useState(''); // Store the entered OTP

  // Handle role change
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Reset form fields when role is changed
    setName('');
    setIdNumber('');
    setEmail('');
    setBranch('');
    setOtpSent(false);
    setOtp('');
  };

  // Handle form submission (OTP sending)
  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log('Sending OTP to:', email);
    setOtpSent(true); // Simulate OTP sent
    // Here, you can integrate OTP API logic
  };

  // Handle OTP verification (if required)
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp);
    // Here, you can integrate OTP verification logic
    alert('OTP Verified Successfully!');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="card p-4" style={{ width: '400px', borderRadius: '10px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Sign Up</h2>

        <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          <div className="form-group mb-3">
            <label>Select Role:</label>
            <select
              className="form-control"
              value={role}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="advisor">Advisor</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          {role && !otpSent && (
            <>
              <div className="form-group mb-3">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {role === 'student' && (
                <>
                  <div className="form-group mb-3">
                    <label>ID Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      placeholder="Enter your ID number"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Department:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      placeholder="Enter your branch"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Degree:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      placeholder="Enter your degree"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Year:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Enter your year"
                      required
                    />
                  </div>
                </>
              )}

              <div className="form-group mb-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ padding: '10px 20px', borderRadius: '8px' }}
              >
                Send OTP
              </button>
            </>
          )}

          {otpSent && (
            <>
              <div className="form-group mb-3">
                <label>OTP:</label>
                <input
                  type="text"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP sent to your email"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success btn-block"
                style={{ padding: '10px 20px', borderRadius: '8px' }}
              >
                Verify OTP
              </button>
            </>
          )}
        </form>

        {otpSent && (
          <div className="alert alert-success mt-3" role="alert">
            OTP has been sent to your email!
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;

