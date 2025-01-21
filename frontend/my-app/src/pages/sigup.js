import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function SignUp() {
  const [role, setRole] = useState(''); // To track the selected role
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  // Handle role change
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Handle form submission based on role
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };

    // Send the data to the backend (you can change the endpoint based on role)
    if (role === 'student') {
      console.log('Student signup:', userData);
    } else if (role === 'advisor') {
      console.log('Advisor signup:', userData);
    } else if (role === 'instructor') {
      console.log('Instructor signup:', userData);
    }

    // Redirect to login page after form submission
    navigate('/login');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh', // Full viewport height to ensure full-screen centering
        backgroundColor: '#f8f9fa', // Optional: background color
      }}
    >
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Sign Up</h2>

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

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Show additional fields based on role */}
          {role === 'student' && (
            <div className="form-group mb-3">
              <label>Student Information:</label>
              {/* Add specific student fields here */}
            </div>
          )}

          {role === 'advisor' && (
            <div className="form-group mb-3">
              <label>Advisor Information:</label>
              {/* Add specific advisor fields here */}
            </div>
          )}

          {role === 'instructor' && (
            <div className="form-group mb-3">
              <label>Instructor Information:</label>
              {/* Add specific instructor fields here */}
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
