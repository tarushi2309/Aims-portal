import React from "react";
import { Link } from "react-router-dom";

export default function studentNavbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>AIMS</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Academic Info
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/student_courses_enrollment"
                    >
                      Courses Offered For Enrollment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/student_courses_offering"
                    >
                      Courses Available For Offering
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Course Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Help
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li> */}
              {/* <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
            </ul>
            <div className="d-flex justify-content-end align-items-center">
              <span className="me-3" style={{ color: "white" }}>
                {props.studentRollNo}
              </span>
              <button className="btn btn-outline-danger" type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
