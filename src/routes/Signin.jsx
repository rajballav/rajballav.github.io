
import{ React,useContext,useRef} from 'react'
import usercontext from '../context/context'
import { useNavigate } from 'react-router-dom'






export default function Signin() {
 
  
  let navigateto=useNavigate()
  const data=useContext(usercontext)
  
  const email=useRef()
  const password=useRef()
  const conformpassword=useRef()

  const onsubmit=()=>{
    const useremail=email.current.value
    const userpassword=password.current.value
    const userconformpassword=conformpassword.current.value
    if(userpassword===userconformpassword){
      
      data.signinuser(useremail,userpassword)
      navigateto("/App")

    }
    
    
    
  }
 
  

  // const userpassword =password.current.value
  // const userconformpassword=conformpassword.current.value
  return (
    <div className='signin'>
      <div className="container">
        <input type="text" placeholder='EMAIL' ref={email}className="email" />
        <input type="text" placeholder='password'ref={password} className="password" />
        <input type="text" placeholder='conform password'ref={conformpassword} className="conform-password" />
        <button onClick={onsubmit}>signin</button>
        {/* <div>{data.user.email}</div> */}


      </div>
    </div>
  )
}
