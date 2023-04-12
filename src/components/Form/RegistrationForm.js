import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ()=>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userInfo = {
        name : name,
        email : email,
        password : password

    }

    const handleSubmitChange =(e)=>{
        alert("Form is submited");
        console.log(userInfo);
        e.preventDefault();
    } 
    const handelNameChange = (e) =>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handelEmailChange =(e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);

    }

    const handelPasswordChange =(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        
    }
    return(
        <div>
            <h1>Welcome to registration process</h1>
            
            <form action="" onSubmit={handleSubmitChange}>
                <div className='formGroup'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required 
                    onChange={handelNameChange} />
                </div>

                <div className='formGroup'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required
                    onChange={handelEmailChange}  />
                </div>

                <div className='formGroup'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required autoComplete='off' 
                    onChange={handelPasswordChange} />     
                </div>

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm;