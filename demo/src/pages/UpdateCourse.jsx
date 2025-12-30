import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { updatecourse } from '../services/studentService'
import { toast } from 'react-toastify'

export default function UpdateCourse() {

  const [course_name, setCourse_name] = useState('');
  const [description, setdescription] = useState('');
  const [fees, setFees] = useState('');
  const [start_date, setstart_date] = useState('');
  const [end_date, setend_date] = useState('');
  const [video_expire_days, setvideo_expire_days] = useState('');

  const navigate = useNavigate();

  const updateCourse = async () => {
  if (!course_name) return toast.warn('Name must be entered');
  if (!description) return toast.warn('Description must be entered');
  if (!fees) return toast.warn('Fees must be entered');
  if (!start_date) return toast.warn('Start date must be entered');
  if (!end_date) return toast.warn('End date must be entered');
  if (!video_expire_days) return toast.warn('Expiry days must be entered');

  try {
    const result = await updatecourse(
      course_name,
      description,
      fees,
      start_date,
      end_date,
      video_expire_days
    );

    if (result.status === 'success') {
      toast.success('Course updated successfully');
      navigate('/');
    } else {
      toast.error(result.error || "Something went wrong");
    }

  } catch (err) {
    toast.error(err.response?.data?.error || "Request failed");
    console.error(err);
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "32rem", borderRadius: "15px" }}>

        <h2 className="text-center mb-4">Update Course</h2>

        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter course name"
            onChange={e => setCourse_name(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            onChange={e => setdescription(e.target.value)}
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
            onChange={e => setstart_date(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            onChange={e => setend_date(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Video Expire Days</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number of days"
            onChange={e => setvideo_expire_days(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success w-100" onClick={updateCourse}>
          Update Course
        </button>
      </div>
    </div>
  );
}
