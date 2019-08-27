import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

//import components
import ParentLogin from "./components/ParentLogin";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='nav-links'>
            <Link className="links" to="/">Home</Link>
          </div>
        <Route exact path="https://wizardly-wozniak-10700b.netlify.com/" />
        </nav>
      </header>
      <div className="appHeader">
      <h1>Parent Login</h1>
      </div>
      <div className="form">
     <ParentLogin />
     </div>
    </div>
  );
}

export default App;
