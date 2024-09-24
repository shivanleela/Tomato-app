import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt=''></img>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolor corrupti, cumque sit alias quos quo vitae a excepturi veritatis hic magnam aut quidem asperiores obcaecati doloremque non tempora perspiciatis.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-3839-291</li>
            <li>tomato@gmail.com</li>
          </ul>

        </div>


      </div>
      <hr/>
      <p className="footer-copy-right">Copyright 2024 @Tomato.com - All Right Reserved</p>

    </div>
  )
}

export default Footer