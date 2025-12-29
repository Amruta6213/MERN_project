import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../services/studentService'
import { toast } from 'react-toastify'

function Register() {

    return (
        
        <div className='container w-50'>
           <h1 className="text-center">Register to Course</h1>
            <div className="mt-3 mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter name"
                    onChange={e => setName(e.target.value)} required />
            </div>

            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
                <label htmlFor="inputMobile" className="form-label">Mobile</label>
                <input type="tel" className="form-control" id="inputMobile" placeholder="Enter mobile number"
                    onChange={e => setMobile(e.target.value)} required />
            </div>

            <div className="mb-3">
                <button className="btn btn-success">Signup</button>
            </div>

            <div>
                Already have an account? Then <Link to="/">Click Here</Link>
            </div>
        </div>
    )
}

export default Register