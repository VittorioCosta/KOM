import React from 'react'

function FormSignup() {
  return (
    <form
        className="form-content container"
    >
        <div className="form-group">
        <label htmlFor="name">Name</label>

        <input 
          className="form-subtitle"
          id='name'
          type='name'
          name='name'
        />
            
        <hr />
        </div>
        <div className="form-group">
        <label htmlFor="contactNumber">Contact No.</label>

        <input
          name="contactNumber"
          className="form-subtitle"
          id="contactNumber"
          type="tel"
        />
        
        <hr />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
            
        <input
          name='email'
          className="form-subtitle"
          id='email'
          type='email'
        />   
    
        <hr />
        <p style={{"color":"red","font-size":"80%"}}>testtesttest</p>
        </div>
        <div className="form-group">
        <label htmlFor="message">Message</label>
        
        <textarea
          name='message'
          className="form-subtitle"
          id='message'
          type='text'
          rows={15}
          max='999'
          style=
            {{
              'border':'1px solid #0b1727',
              "border-radius": "10px"

            }}
        />
        

        {/* <hr /> */}
        </div>
        <br />
        <button 
          className=" btn btn-primary "
          type='submit'
          style={{"border-radius": "10px"}}
        >Send Message</button>
    </form>
  )
}

export default FormSignup