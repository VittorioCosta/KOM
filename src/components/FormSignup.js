import React from 'react'
import formLogic from '../utils/formLogic'
import validate from '../utils/formValidate'

import TagManager from 'react-gtm-module'

function FormSignup({submitting}) {

  const googleTagForm = React.useEffect(()=>{
    window.dataLayer.push({event: 'submitForm'})
  }, [])

  const {
    handleChange,
    handleSubmit,
    form,
    values,
    errors

  } = formLogic(validate, submitting)

  return (
    <form
        className="form-content container"
        onSubmit={handleSubmit}
        ref={form}
    >
        <div className="form-group">
        <label htmlFor="name">Name</label>

        <input 
          className="form-subtitle"
          id='name'
          type='name'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
            
        <hr />
        {errors.name && <p style={{"color":"#df372b","fontSize":"80%"}}>{errors.name}</p>}

        </div>
        <div className="form-group">
        <label htmlFor="contactNumber">Contact No.</label>

        <input
          name="contactNumber"
          className="form-subtitle"
          id="contactNumber"
          type="tel"
          value={values.contactNumber}
          onChange={handleChange}
        />
  
        <hr />
        {errors.contactNumber && <p style={{"color":"#df372b","fontSize":"80%"}}>{errors.contactNumber}</p>}

        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
            
        <input
          name='email'
          className="form-subtitle"
          id='email'
          type='email'
          value={values.email}
          onChange={handleChange}
        />   
    
        <hr />
        {errors.email && <p style={{"color":"#df372b","fontSize":"80%"}}>{errors.email}</p>}
        
        </div>
        <div className="form-group">
        <label htmlFor="message">Message</label>
        
        <textarea
          name='message'
          className="form-subtitle"
          id='message'
          type='text'
          value={values.message}
          onChange={handleChange}
          rows={15}
          max='999'
          style=
            {{
              /* 'border':'1px solid #0b1727', */
              "borderRadius": "8px"

            }}
        />
        
        {errors.message && <p style={{"color":"#df372b","fontSize":"80%"}}>{errors.message}</p>}
        {/* <hr /> */}
        </div>
        <br />
        
        <button 
          className=" btn btn-primary "
          type='submit'
          style={{"borderRadius": "10px"}}
          onClick = {googleTagForm}
        >Send Message</button>
    </form>
  )
}

export default FormSignup