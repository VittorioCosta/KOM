import React from "react"
import emailjs from '@emailjs/browser';

export default function FormLogic(validate, callback){

    const initialValues = {
        name:"",
        contactNumber:"",
        email:"",
        message:""
    }

    const [values, setValues] = React.useState(initialValues)
    const [errors, setErrors] = React.useState({})
    const [submit, setSubmit] = React.useState(false)



    const form = React.useRef()

    const handleChange = e =>{

        const { name, value } = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async e=>{
        e.preventDefault()
        setErrors(validate(values))
        setSubmit(true)
    }

    const sendValues = ()=>{

        try {
             emailjs.sendForm('service_ncvuomp', 'template_8ok6lgb', form.current, 'p2nV40tkDluZsYKRp')
             .then((res)=>console.log(res.text))

        } catch (error) {
            console.log(error.text);
        }
        
    }

    React.useEffect(()=>{
        
        if(Object.keys(errors).length===0 && submit){
            callback()
            sendValues()
        }
        // eslint-disable-next-line
    },[errors])

    return {
        handleChange,
        handleSubmit,
        form,
        values,
        errors
    }
};