import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: ""
  })

  const handleRegistrationChange = (e) =>{
    const {name, value} = e.target;
    setRegistrationData((previousData) => (
      {
        ...previousData,
        [name]: value
      }
    ))
  }

  const handleRegistrationSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("https://authmernbackend-7799.onrender.com/register",registrationData);
      console.log("response.data = ",response.data)
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: ""
    })
  }

  return (
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input type='text' name='username' placeholder='username' onChange={handleRegistrationChange} value={registrationData.username} required />
        <input type='password' name='password' placeholder='password' onChange={handleRegistrationChange} value={registrationData.password} required />
        <button type='submit' > Register </button>
        <p>Already Registered? <Link to={"/login"} > Login here </Link></p>
      </form>
    </div>
  )
}

export default Register;