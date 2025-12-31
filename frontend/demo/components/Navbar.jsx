import React from 'react'
//import { Link } from 'react-router'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Student Portal">Student Portal </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link"  style={{ color: "white", fontWeight: "600" }}aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  style={{ color: "white", fontWeight: "600" }}aria-current="page" to="/About">About</Link>
                            </li>
                        </ul>
                        <div className="ms-auto">
                              <Link to="/login" className="btn btn-light fw-semibold">
                               Login
                                </Link>
                            </div>        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar