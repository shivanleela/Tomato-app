import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../../assets/assets'

const Loginpopup = ({setshowLogin}) => {

  const[curstate,setcurstate]=useState('Login')
  return (
    <div className='login-popup'>
      <form className='login-popup-content'>
        <div className="div-login-popup-tittle">
          <h2>{curstate}</h2>
          <img src={assets.cross_icon} alt='' onClick={()=>setshowLogin(false)}></img>
        </div>
        <div className='login-popup-input'>

          {
            curstate==='Login'?<></>:<input type='text' placeholder='enter your name'></input>
          }
         
           <input type='email' placeholder='Your email' required/>
          <input type='password' placeholder='Enter password' required/>
        </div>
        <button>{curstate==='Sing Up'?"Create account":"Login"}</button>
        <div className="div-login-poppup-condition">
          <input type='checkbox' required></input>
          <p>By contiuning, I agree to the terms of use privacy policy</p>
        </div>
        {
          curstate==="Login"? <p>Create a new account<span onClick={()=>setcurstate("Sing Up")}>Click here</span></p>
          : <p>Already have an account<span onClick={()=>setcurstate("Login")}>Login here</span></p>
        }
       
       


      </form>
      
    </div>
  )
}

export default Loginpopup