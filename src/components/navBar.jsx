import React from 'react';
import Logo from '../12.png';

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid bg-dark py-3">
        <img src={Logo} style={{width:"45px"}}/><span className="mx-2" style={{fontSize:"15px",color:"#FFFF"}}>LOWA STATE UNIVERCITY</span>
      </div>
      <nav className="d-block navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active">Book Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">User Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Book Issue Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Admin Profile</a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}
 
export default NavBar;