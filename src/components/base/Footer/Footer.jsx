import React from 'react';
import img from '../../../images/footerLogo.png'

const Footer = () => {
    return (
        <div className="row mt-5 pt-5 mb-3">
            <div className="col-12">
                <nav className="nav justify-content-between text-dark">
                    <a className="nav-link " href="#">MENU 01</a>
                    <a className="nav-link" href="#">MENU 02</a>
                    <a className="nav-link" href="#">MENU 03</a>
                    <a className="nav-link" href="#"><img src={img}></img></a>
                    <a className="nav-link" href="#">MENU 04</a>
                    <a className="nav-link" href="#">MENU 05</a>
                    <a className="nav-link" href="#">MENU 06</a>
                </nav>
                <hr />
            </div>
            <div className="col-12 ">
                <p className="text-center footer-text mb-3 mt-3">© Copyright 2020. Robit Platform</p>
            </div>
        </div>
    );


}

export default Footer;