import React from "react";
import { Route } from "react-router-dom";

//import components here
import RequestFormPage from "./RequestFormPage";
import MessageBoardPage from "./MessageBoardPage";
import App from "../App";

function Routes () {
    return (
        <div>
            <Route exact path="/" component={App} />
            <Route path="/request" component={RequestFormPage} />
            <Route path="/messageboard" component={MessageBoardPage} />
        </div>
    )
}
export default Routes;