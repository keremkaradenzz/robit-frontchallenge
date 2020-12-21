import React from 'react';
import Logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        /* Nav Start */ 
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             <img src={Logo} />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li className="nav-item">
                        <a className="nav-link active " aria-current="page" href="#">Why Robit?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Explore</a>
                    </li>
                 
                </ul>
                <form className="d-flex align-items-center ">
                    <div id="search" className="d-flex align-items-center search ">
                        <input  className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>   
                  
                    </div>
                        <button className="btn btn-outline-success me-2 font-size-14 text-dark" type="submit">Sign in</button>
                        <button className="btn btn-outline-success bg-blue text-white font-size-14" type="submit">Sign up</button>
                 </form>
                </div>
            </div>
        </nav>
        /* Nav End */

  );
 
}

export default Navbar;  