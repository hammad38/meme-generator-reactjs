import React, { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState(
        {firstName: "", lastName: "", email: " ", comments: ""}
        )
    console.log(formData)

    const handleChange =(event)=>{

       setFormData(prevFormData => {
        return{
            ...prevFormData,
            [event.target.name] : event.target.value
        }
       })
    }

  return (
    <form action="">
        <input 
        type="text"
        placeholder="First Name" 
        onChange={handleChange}
        name= "firstName"
        value={formData.firstName}
         />
        <input 
        type="text"
        placeholder="Last Name" 
        onChange={handleChange}
        name= "lastName"
        value={formData.lastName}
         />
        <input 
        type="email"
        placeholder="E-mail" 
        onChange={handleChange}
        name= "email"
        value={formData.email}
         />

         <textarea 
        placeholder="Comments" 
        onChange={handleChange}
        name= "comments"
        value={formData.comments} />

        <input type="checkbox" id='isFriendly'/>
        <label htmlFor="isFriendly">Are you ok?</label>


    </form>
  )
}

export default Form