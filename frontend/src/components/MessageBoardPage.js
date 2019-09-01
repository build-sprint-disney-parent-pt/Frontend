import React from 'react';

import MessageBoardList from "./MessageBoardList";
import Links from "./Links";


function MessageBoardPage(){
    return (
        <div className="App">
             
             <div>
           <Links />
          </div>
            <div className="appHeader">
            <h1>Message Board</h1>
            </div>
            
            <MessageBoardList />
        </div>
    )
}

export default MessageBoardPage;