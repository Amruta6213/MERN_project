import axios from "axios"

//login user
export async function loginUser(email,password){
    const URL = "http://localhost:4000/user/login"
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
//get available courses
export async function getAllcourses(token){
    const URL = "http://localhost:4000/course/all_courses?startDate= 2025-12-10 &endDate=2026-01-05"
    //const body = {courseId,email,name,mob}
    const response = await axios.get(URL,{headers:{token}})
    return response.data
}


//view details
 export async function showDetails(cid,token){
    const URL = `http://localhost:4000/course/showDetails/${cid}`
    const response = await axios.get(URL,{headers :{token}})
    return response.data
 }

 //add course
export async function AddNewCourse(course_name,description,fees,start_date,end_date,video_expire_days,token){
    const URL = "http://localhost:4000/course/add"
    const body = {course_name,description,fees,start_date,end_date,video_expire_days}
    const response = await axios.post(URL,body,{headers : {token}})
    return response.data
}