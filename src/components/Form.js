import React from 'react'
import FormSignup from './FormSignup'
import { Navigate } from 'react-router-dom';


function Form() {

    const [submitted, setSubmitted] = React.useState(false)
    const submitting = () => setSubmitted(true)

  return <>
    {
    !submitted
        ? <FormSignup submitting={submitting} />
        : <Navigate to="form-success" /> 
    }    

  </>
}

export default Form