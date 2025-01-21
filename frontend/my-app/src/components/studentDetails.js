import React from "react";

export default function StudentDetails(props) {
  return (
    <div className="container my-3">
      <h4>Student Details</h4>
      <div className="row g-3">
        {/* Full Name */}
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={props.fullName}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
        {/* Roll No */}
        <div className="col-md-6">
          <label htmlFor="rollNo" className="form-label">
            Roll No.
          </label>
          <input
            type="text"
            className="form-control"
            id="rollNo"
            value={props.rollNo}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
        {/* Degree */}
        <div className="col-md-6">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            value={props.degree}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={props.email}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
        {/* Department */}
        <div className="col-md-6">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={props.department}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
        {/* Year of Entry */}
        <div className="col-md-6">
          <label htmlFor="yearOfEntry" className="form-label">
            Year-of-entry
          </label>
          <input
            type="text"
            className="form-control"
            id="yearOfEntry"
            value={props.yearOfEntry}
            readOnly
            style={{backgroundColor: "lightgrey"}}
          />
        </div>
      </div>
    </div>
  );
}
