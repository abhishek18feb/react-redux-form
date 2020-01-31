import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '../Component/TextField';

const removeSpace = value => value && value.trim()

const FieldNormalizingForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component={TextField}
            type="text"
            placeholder="Username"
            normalize={removeSpace}
          />
        </div>
      </div>
    
     
      
     
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'normalizing', // a unique identifier for this form
  //initialValues: { min: 1, max: 10 }
})(FieldNormalizingForm)