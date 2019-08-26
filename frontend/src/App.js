import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

//import components
import ParentLogin from "./components/ParentLogin";
import RequestForm from "./components/RequestForm";
import MessageBoardList from "./components/MessageBoardList";


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='nav-links'>
            <Link className="links" to="/">Home</Link>
          </div>

        </nav>
      </header>
      <div className="appHeader">
      <h1>Parent Login</h1>
      </div>
      <div className="form">
     <ParentLogin />
     </div>
     <div className="form">
       <h1>Request Form</h1>
     <RequestForm />
     </div>
     <div className="messageBoard">
       <h1>Message Board</h1>
     <MessageBoardList />
     </div>
      </div>
  );
}

export default App;
