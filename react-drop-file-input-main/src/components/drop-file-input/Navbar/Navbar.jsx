import React from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Navbar() {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                <div className="container-fluid">
                    <div className="col-lg-5">  <a className="navbar-brand" href="#"><img src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp" width="200" height="50" alt="" /></a></div>
                    <div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item nsvBtn ">
                                    <button className="nav-link active " href="#">Home</button>
                                </li>
                                
                                <li className="nav-item">
                                


                                <button type="button" class="btn btn-warning">Login</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}