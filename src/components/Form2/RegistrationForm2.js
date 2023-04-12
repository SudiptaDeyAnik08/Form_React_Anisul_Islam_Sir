import React, { useState } from 'react';
import './RegistrationForm2.css';

const RegistrationForm = ()=>{


    const [user,setUser] = useState({name:'',email:'',password:''});

    const {name,email,password} = user;

    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const userInfo = {
    //     name : name,
    //     email : email,
    //     password : password

    // }


    const handelChange = (e)=>{
        console.log(e.target.name);
        const fieldName = e.target.name;
        if(fieldName === 'name'){
            setUser({name:e.target.value, email,password});
        }else if(fieldName === 'email'){
            setUser({name, email:e.target.value,password});
        }else if( fieldName === 'password'){
            setUser({name, email,password:e.target.value});
        }

    }

    const handleSubmitChange =(e)=>{
        alert("Form is submited");
        console.log(user);
        e.preventDefault();
    } 

    // const handelNameChange = (e) =>{
    //     // console.log(e.target.value);
    //     // setName(e.target.value)
    //     setUser({name:e.target.value, email,password});
    // }

    // const handelEmailChange =(e) =>{
    //     // console.log(e.target.value);
    //     // setEmail(e.target.value);
    //     setUser({name, email:e.target.value,password});


    // }

    // const handelPasswordChange =(e)=>{
    //     // console.log(e.target.value);
    //     // setPassword(e.target.value);
    //     setUser({name, email,password:e.target.value});
    // }
    return(
        <div>
            <h1>Welcome to registration process 2</h1>
            <p>Here i am using Object on useState</p>
            
            <form action="" onSubmit={handleSubmitChange}>
                <div className='formGroup'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" required 
                    onChange={handelChange} />
                </div>

                <div className='formGroup'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required
                    onChange={handelChange}  />
                </div>

                <div className='formGroup'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required autoComplete='off' 
                    onChange={handelChange} />     
                </div>

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm;