import React, { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("")
    console.log(firstName)

    const handleChange =(event)=>{
        setFirstName(event.target.value)
    }

  return (
    <form action="">
        <input 
        type="text"
        placeholder="First Name" 
        onChange={handleChange}
         />
    </form>
  )
}

export default Form