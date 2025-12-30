import React from "react";
import Navbar from "../../components/Navbar";
import NavbarAdmin from "../../components/NavbarAdmin";

export default function AddNewVideo(){
    return (
    <>
      <Navbar />
      <NavbarAdmin />
      

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
        </div>
      </>
    )
}