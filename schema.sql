
DROP DATABASE IF EXISTS aims;
create database aims;
use aims;

CREATE TABLE student (
    student_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    student_name VARCHAR(100),
    entry_no VARCHAR(11),
    email_id VARCHAR(100),
    degree ENUM('BTECH','MTECH','PHD','MSC'),
    year_of_entry int,
    dep ENUM('COMPUTER SCIENCE AND ENGINEERING','ELECTRICAL ENGINEERING','MECHANICAL ENGINEERING','MATHS AND COMPUTING','CHEMICAL ENGINEERING')

);

CREATE TABLE otp_table(
    user_id INT Primary key not null,
    otp varchar(6),
    created_at datetime
);

CREATE TABLE faculty(
    faculty_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    faculty_name VARCHAR(100),
    email_id VARCHAR(100)
);

CREATE TABLE course (
    course_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    course_name VARCHAR(100),
    faculty_id int,
    status enum('running','completed'),
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id),
    enrollments int
);

CREATE TABLE student_course (
    student_id int,
    course_id int ,
    status enum('audit','credit','drop'),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

Insert into student(student_name,email_id,degree,dep,year_of_entry,entry_no) values('TARUSHI','2022csb1135@iitrpr.ac.in','BTECH','COMPUTER SCIENCE AND ENGINEERING',2022,'2022csb1135');
