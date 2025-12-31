
import { useState,useEffect } from "react";
import { showDetails } from "../services/userService";
import { useLocation } from "react-router";

export default function Coursedetails(){
   const location = useLocation()
   const course = location.state.course
    return (
    <div className="container mt-4 d-flex flex-wrap gap-3">
    
        <div className="card" style={{ width: "18rem" }} key={course.course_id}>
          <div className="card-body">
            <h5 className="card-title">{course.course_name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{course.description}</h6>
            <p className="card-text"><strong>Start Date:</strong> {course.start_date}</p>
            <p className="card-text"><strong>End Date:</strong> {course.end_date}</p>
            <p className="card-text"><strong>Fees:</strong> ₹{course.fees}</p>
            <a href="#" className="btn btn-success" onClick={()=>{Registercourse(course.course_id)}}>Register to Course</a>
          </div>
        </div>
  
    </div>

    )
}
