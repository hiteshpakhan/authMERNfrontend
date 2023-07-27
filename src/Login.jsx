import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })

    const handleLoginSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("https://authmernbackend-7799.onrender.com/login", loginData);
            const {success, message} = response.data;
            if(success){
                console.log("login successfully");
            }else{
                console.log(message);
            }
        } catch (error) {
            console.error("login error", error);
        }

        setLoginData({
            username:"",
            password:""
        })
    }

    const handleUserChange = (e) => {
        const {name, value} = e.target;
        setLoginData((p) => ({
            ...p,
            [name]: value
        }))
    }
    
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
            
            <input type="text" name='username' placeholder='Username' value={loginData.username} onChange={handleUserChange} required />
            
            <input type="password" name='password' placeholder='password' value={loginData.password} onChange={handleUserChange} required />
            
            <button type='submit'> Login </button>
            
            <Link to={"/register"}> Register here </Link>
        
        </form>
    </div>
  )
}

export default Login;