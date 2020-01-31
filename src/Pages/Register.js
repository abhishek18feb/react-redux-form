import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PasswordField from '../Component/PasswordField';
import TextField from '../Component/TextField';
import { connect } from 'react-redux';
import actions from '../sotre/action/trimUname';

let ContactForm = props => {
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const { handleSubmit, pristine, reset, submitting } = props

    const handleChange = event =>{
        console.log(event.target.value)
        props.timeUserName(event.target.value)
    }
    const submitForm = val =>{
        console.log(val)
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
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
                        name="uname"
                        component={TextField}
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
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

// const mapStateToProps = (state) => ({
//     // singleServiceResponse: state.customerService.singleServiceResponse,
//     // singleServiceResponseMsg:state.customerService.singleServiceResponseMsg,
// });

// const mapDispatchToProps = (dispatch)  => ({
//     timeUserName: (uname)=>dispatch(actions.timeUserName(uname)),
// });


// let contactForm = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ContactForm);

// export default reduxForm({
//     form: 'ContactForm' // a unique name for this form
// })(contactForm);

// ContactForm = reduxForm({
//     // a unique name for the form
//     form: 'contact',
//     asyncBlurFields: ['password'],
// })(contactForm)

// export default ContactForm

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ContactForm = reduxForm({
    form: 'initializeFromState', // a unique identifier for this form
  })(ContactForm);
  
  // You have to connect() to any reducers that you wish to connect to yourself
  ContactForm = connect(
    state => ({
      initialValues: state.trimUanme.data, // pull initial values from account reducer
    }),
   
  )(ContactForm);
  
  export default ContactForm;