import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

//import components
import ParentLogin from "./components/ParentLogin";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <header>
        
          <div>
           <Links />
          </div>
    
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
