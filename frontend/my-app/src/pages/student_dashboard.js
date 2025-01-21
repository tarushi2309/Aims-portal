import React from 'react';
import StudentNavbar from '../components/studentNavbar';
import StudentDetails from '../components/studentDetails';

function StudentDashboard() {
  return (
    <div>
      <StudentNavbar studentRollNo="2022csb1112"/>
      <StudentDetails/>
    </div>
  );
}

export default StudentDashboard;