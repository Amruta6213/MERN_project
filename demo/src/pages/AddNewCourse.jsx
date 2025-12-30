import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { addnewcourse } from '../services/studentService'
import { toast } from 'react-toastify'
export default function AddNewCourse() {

    const [course_name, setCourse_name] = useState('');
    const [description, setdescription] = useState('');
    const [fees, setFees] = useState('');
    const [start_date, setstart_date] = useState('');
    const [end_date, setend_date] = useState('');
    const [video_expire_days, setvideo_expire_days] = useState('');

    // Function to handle Add Course
    const addCourse = () => {
        console.log("Course Added:");
        console.log({ course_name, description, fees, start_date, end_date, video_expire_days });

        alert("Course Added Successfully!");
    };

    return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card shadow p-4" style={{ width: "32rem", borderRadius: "15px" }}>
      
      <h2 className="text-center mb-4">Add New Course</h2>

      <div className="mb-3">
        <label className="form-label">Course Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter course name"
          onChange={e => setCourseName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter description"
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fees</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter fees"
          onChange={e => setFees(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          onChange={e => setStartDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">End Date</label>
        <input
          type="date"
          className="form-control"
          onChange={e => setEndDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Video Expire Days</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter number of days"
          onChange={e => setExpireDays(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-success w-100" onClick={addCourse}>
        Add Course
      </button>
    </div>
  </div>
);

}