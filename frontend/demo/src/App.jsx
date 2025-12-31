import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Register from './pages/Register'
import AddCourses from './pages/AddCourses'
import AdminHome from './pages/AdminHome'
import Home from './pages/Home'
import { createContext, useState } from 'react'
import Coursedetails from './pages/Coursedetails'

export const LoginContext = createContext()

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addcourse" element={<AddCourses />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coursedetails" element={<Coursedetails />} />
        </Routes>
      </LoginContext.Provider>

      <ToastContainer />
    </>
  )
}

export default App
