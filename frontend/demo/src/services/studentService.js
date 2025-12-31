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
//get all courses
export async function getAllCourses(token){
    const URL = "http://localhost:4000/user"
    //const headers = {token}
    const response = await axios.get(URL,{headers : {token}})
    return response.data
}