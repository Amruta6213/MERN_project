import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import AddNewVideo from './pages/AddNewVideo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/*" element={<Login />} /> 
           <Route path="/adminhome" element={<AdminHome />} />
           <Route path="/register" element={<Register />}/>
           <Route path="/addnewvideo" element={<AddNewVideo/>}/>
        
          </Routes>
    </>
  )
}

export default App
