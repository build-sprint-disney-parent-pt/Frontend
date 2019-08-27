import React from 'react';
import { Form, Field, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";



function ParentLogin(){
    return(
        <div className="loginForm">
      <Formik>
       <Form>
           <Field
           component="input"
           type="text"
           name="userName"
           placeholder="User Name"
           />
            <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
            />
            <button type="submit">Login</button>

       </Form>
       </Formik>
       </div>
    )
}

export default ParentLogin;