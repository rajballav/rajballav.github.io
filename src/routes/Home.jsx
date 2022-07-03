import React from 'react'
import { Link } from "react-router-dom";


export default function Home() {
  
  return (
   <div className="homecontainer">
    
        <div className='home'>
            <div className="logincontainer" ><Link to="/Login">LogIN</Link></div>
            <div className="signincontainer"><Link to="/signin">SigIN</Link></div>
        </div>
   </div>
  )
}
