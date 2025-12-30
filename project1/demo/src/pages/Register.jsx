import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../services/studentService'
import { toast } from 'react-toastify'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate()

    const signup = async () => {
        if (!name) return toast.warn('Name must be entered')
        if (!email) return toast.warn('Email must be entered')
        if (!mobile) return toast.warn('Mobile must be entered')

        const result = await signupUser(name, email, mobile)

        if (result.status === 'success') {
            toast.success('User registered successfully')
            navigate('/')
        } else {
            toast.error(result.error)
        }
    }

    return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card shadow p-4" style={{ width: "28rem", borderRadius: "15px" }}>
      
      <h2 className="text-center mb-4">Register to Course</h2>

      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Enter name"
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputMobile" className="form-label">Mobile</label>
        <input
          type="tel"
          className="form-control"
          id="inputMobile"
          placeholder="Enter mobile number"
          onChange={e => setMobile(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-success w-100 mb-3" onClick={signup}>
        Signup
      </button>

      <div className="text-center">
        Already have an account? <Link to="/">Click Here</Link>
      </div>
    </div>
  </div>
);

}

export default Register