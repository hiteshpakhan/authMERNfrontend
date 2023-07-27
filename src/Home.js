import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>      
        <h1>WELCOME TO HOME PAGE</h1>
        <h3>
            if you want to go to the registration go to this link <Link to={"/register"}> Register here </Link>
            <br></br> 
            and if you want to login go to the <Link to={"/login"}> Login here </Link>
        </h3>
        <hr></hr>
</div>
  )
}

export default Home