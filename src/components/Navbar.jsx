import React from 'react'
import { Link } from 'react-router-dom'
import fichayaLogo from './assets/fichaya_logo.svg'
import personIcon from './assets/person.svg'
import caretDown from './assets/caret-down.svg'
import bellIcon from './assets/bell-fill.svg'
import { NavbarStyles } from './NavbarStyles'

const Navbar = () => (
   <NavbarStyles>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <img src={fichayaLogo} alt="Fichaya Logo" />
          </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
             <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">     
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Dashboard</Link>
               </li>
                <li className="nav-item">
                 <Link className="nav-link" to="#">Customers</Link>
                 </li>
                  <li className="nav-item">
                  <Link class="nav-link" to="#">Associates</Link>
                   </li>
                   <li className="nav-item request-item">
                    <Link className="nav-link" to="#">Requests</Link>
                     </li>
                     <li className="nav-item">
                      <Link className="nav-link" to="#">Shedules</Link>
                       </li>
                       <li className="nav-item">
                       <Link className="nav-link" to="#">Payments</Link>
                        </li>
                        <li className="nav-item"> 
                       <Link className="nav-link" to="#">Settings</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link href="#" className="nav-link user-link">
                        <img src={bellIcon} alt="notifcation"/>
                      </Link>
                     </li>
                    <li className="nav-item">
                    <Link to="#" className="nav-link nav-profile ml-1">
                      <img src={personIcon} alt="user"/>
                      <img src={caretDown} alt="caret"/>
                    </Link>
                  </li>
               </ul>
            </div>
        </div>
     </nav>
    </NavbarStyles>
)


export default Navbar
