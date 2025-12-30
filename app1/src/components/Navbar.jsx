import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" data-bs-theme="dark">
      <span class="navbar-toggler-icon"></span>
    </button>

    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
 
</nav>

<nav class="navbar bg-primary" data-bs-theme="dark">
 
</nav>

<nav class="navbar" style="background-color: #2c7db8ff;" data-bs-theme="light">

</nav>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>


      
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>

                        
                   
               
    
    
          
        
          

        </div>
    )
}

export default Navbar
