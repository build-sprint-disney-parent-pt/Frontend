import React from 'react';
import { Form, Field, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

function RequestForm(){
    return (
        <div className="requestForm">
            <Formik>
                <Form>
                    <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    />
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
            </Formik>


        </div>
    )
}

export default RequestForm;