import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { loginUser } from '../services/userService'
import { toast } from 'react-toastify'

function Login() {
   

    return (
        <div className='container w-50'>
          <h1 className='text-center'>Login</h1>
            <div className=" mt-3 mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
                <button className="btn btn-success">Signin</button>
            </div>

            <div>
                Don't have an account? then to register <Link to='/register' >Click Here</Link>
            </div>
        </div>
    )
}

export default Login