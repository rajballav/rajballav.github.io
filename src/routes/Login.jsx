import React from 'react'
import { useRef ,useContext} from 'react'
import usercontext from '../context/context'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate()
  const data=useContext(usercontext)
  const loginemail=useRef()
  const loginpassword=useRef()
  const onlogin=async()=>{
    const userloginemail=loginemail.current.value
    const userloginpassword=loginpassword.current.value
    await data.loginuser(userloginemail,userloginpassword)
    navigate("/app")
    data.renderdata()

  }
  return (
   <div className="signin">
      <div className='container'>
      <input type="text" placeholder='email'ref={loginemail} className="email" />
      <input type="text" placeholder='password'ref={loginpassword} className="password" />
      <button onClick={onlogin}>Login</button>
    </div>
   </div>
  )
}
