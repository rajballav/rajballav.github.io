import React from 'react'
import usercontext from '../context/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const data=useContext(usercontext)
  const navigate=useNavigate()

  const onlogout=()=>{
    data.sendUserdata(data.note)
    data.logoutuser()
    data.setnote([])
    navigate("/")
    

  }
  return (
    <div className='navbar'>
      
      <div className="profile">
        <div className="pic"></div>
        <div className="name">Email</div>
        <button className="logout" onClick={onlogout}>Logout</button>
      </div>
    </div>
  )
}
