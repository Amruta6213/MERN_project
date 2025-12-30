import axios from "axios"
import UpdateCourse from './../pages/UpdateCourse';

//login user
export async function loginUser(email,password){
    const URL = "http://localhost:4000/admin/login"
    const body = {email,password}
    const response = await axios.post(URL,body)
    return response.data
}

//register user
export async function signupUser(courseId,email,name,mob){
    const URL = "http://localhost:4000/students/register"
    const body = {courseId,email,name,mob}
    const response = await axios.post(URL,body)
    return response.data
}

//addcourse
export async function addnewcourse(course_name, description, fees, start_date, end_date, video_expire_days)
{
    const URL="http://localhost:4000/course/add"
    const body={course_name, description, fees, start_date, end_date, video_expire_days}
    const response=await axios.get(URL,body)
    return response.data
}

// update course
export async function updatecourse(course_name, description, fees, start_date, end_date, video_expire_days)
{
    const URL="http://localhost:4000/course/update"
    const body = { course_name, description, fees, start_date, end_date, video_expire_days }

    const response = await axios.put(URL,body)

    return response.data
}