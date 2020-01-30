import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PasswordField from '../Component/PasswordField';
import TextField from '../Component/TextField';

let ContactForm = props => {
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component={TextField}
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component={TextField}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Username Name</label>
                <div>
                    <Field
                        name="username"
                        component={TextField}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field
                        name="password"
                        component={PasswordField}
                        type="text"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    asyncBlurFields: ['password'],
})(ContactForm)

export default ContactForm