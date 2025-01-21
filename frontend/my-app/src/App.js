import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AdminDashboard from './pages/admin_dashboard';
import FacultyDashboard from './pages/faculty_dashboard';
import Login from './pages/login';
import Signup from './pages/sigup';
import StudentDashboard from './pages/student_dashboard';

function App(){
  return(
    <Router>
        <div className="App">
          <Routes>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/admin_dashboard" element = {<AdminDashboard/>}/>
            <Route path = "/faculty_dashboard" element = {<FacultyDashboard/>}/>  
            <Route path = "/student_dashboard" element = {<StudentDashboard/>}/>  
          </Routes>
        </div>
    </Router>
  );
}

export default App;