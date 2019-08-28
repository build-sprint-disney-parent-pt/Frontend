import React from "react";
import { Link } from "react-router-dom";

function Links () {
    return(
        <div>
             <a href="https://wizardly-wozniak-10700b.netlify.com/" className="nav-links">Home</a>
             <Link className="nav-links" to="/">Parent Login</Link>
             <Link className="nav-links" to="/request">Request Form</Link>
             <Link className="nav-links" to="/messageboard">Message Board</Link>
        </div>
    )    
}

export default Links;