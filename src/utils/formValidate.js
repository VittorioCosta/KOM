
export default function validate(values) {

    const errors = {}

    /* VALIDATE NAME */

    if(!values.name.trim()) {
        errors.name= 'please insert your name'
    }

    /* VALIDATE CONTACT NUMBER */

    if(!values.contactNumber.trim()) {
        errors.contactNumber= 'please insert you number'
    }

    

    /* VALIDATE EMAIL */

    if(!values.email.trim()) {
        errors.email= 'please insert your email'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email='email address is invalid'
    }

    /* VALIDATE MESSAGE */  

    if(!values.message.trim()) {
        errors.message= 'please insert a message'
    } else if ( values.message.length < 15) {
        errors.message = 'the message must have at least 15 characters'
    }  else if ( values.message.length > 999) {
        errors.message = 'the message cannot have more than 999 characters'
    }
    

    return errors 
}