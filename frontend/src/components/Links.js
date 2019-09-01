import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

function Links () {
    return(
        <div className="mainNav">
           <div className="logoContainer"><img src={logo} className="logo"></img></div> 
           <div className="navContainer">
             <a href="https://wizardly-wozniak-10700b.netlify.com/" className="nav-links">Home</a>
             <Link className="nav-links" to="/">Parent Login</Link>
             <Link className="nav-links" to="/request">Request Form</Link>
             <Link className="nav-links" to="/messageboard">Message Board</Link>
             </div>
        </div>
    )    
}

export default Links;