import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { getAllCourses } from "..//services/studentService"
import { useNavigate } from "react-router"

export default function Home(){
    const [courses,getCourses] = useState([])
    const getCourse = async ()=>{
        const token = sessionStorage.getItem('token')
        const result = await getAllCourses(token);
        console.log(result)
        if(result.status == "success"){
            getCourses(result.data);
        }
      }
      useEffect(()=>{
        getCourse();
      },[])
      const navigate = useNavigate();
    return <>
    <Navbar/>
    <div className="container">
  <h2 className="text_center">All Available courses</h2>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>course_id</th>
        <th>course_name</th>
        <th>description</th>
        <th>fees</th>
        <th>start_date</th>
        <th>end_date</th>
        <th>video_expire_days</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
            {courses.map(course => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.description}</td>
                <td>{course.fees}</td>
                <td>{course.start_date}</td>
                <td>{course.end_date}</td>
                <td>{course.video_expire_days}</td>
                <td className="text-center">
                  <button className="btn btn-success" onClick={()=>  navigate('/Coursedetails', {state: {course}})}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
  </table>
</div>
    </>
}