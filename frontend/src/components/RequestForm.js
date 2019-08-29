import React from 'react';
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

function RequestForm(errors, touched, status){
    return (
        <div className="requestForm">
            
                <Form>
                    <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    />
                    {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
    
                    <Field
                    component="select" className="park-select" name="parks">
                    <option>Select A Park</option>
                    <option value="magicKingdom">Magic Kingdom</option>
                    <option value="animalKingdom">Animal Kingdom</option>
                    <option value="hollywoodStudios">Hollywood Studios</option>
                    <option value="epcot">Epcot</option>
                    </Field>
                   
                    <Field
                    component="input"
                    type="text"
                    name="ride"
                    placeholder="Nearest Ride"
                    />
                    <Field
                    component="select" className="park-select" name="request">
                        <option>Type of Request</option>
                        <option value="strollerExchange">Stroller Exchange</option>
                        <option value="parentSwap">Parent Swap</option>
                    </Field>
                    <Field
                    component="input"
                    type="number"
                    name="number"
                    placeholder="Number of Children"
                    />
                   <Field
                    component="input"
                    type="text"
                    name="age"
                    placeholder="Age of Children"
                    />
                    <Field
                    component="textarea"
                    type="text"
                    name="comments"
                    placeholder="Comments"
                    />
                    <button type="submit">Submit</button>
                </Form>
          


        </div>
    )
}

const propsToValuesMap = withFormik({
    mapPropsToValues({name, parks, ride, request, number, age, comments}){
        return {
           name: name || "",
           parks: parks || "",
           ride: ride || "",
           request: request || "",
           number: number || "", 
           age: age || "",
           comments: comments || ""
        };
    },

    validationSchema: Yup.object().shape({
       name: Yup.string().required("Parent's name is required")
    //    parks: Yup.array().required("Park is required")
       
    })   
});

const RequestFormFormik = propsToValuesMap(RequestForm);

export default RequestFormFormik;