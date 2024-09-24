import { useState } from "react"
import { assets } from "../../../assets/assets"
import './Navbar.css'

function Navbar(){
    const [menu,setmenu]=useState('home')

    return(
    <div className="navbar"style={{alignItems:"center"}}>
       <img src={assets.logo}alt="" className="logo"/>
       <ul className="navbar-menu">
        <li onClick={()=>setmenu('home')}className={menu==="home"?'active':''}>Home</li>
        <li onClick={()=>setmenu('menu')} className={menu==="menu"?'active':''}>Menu</li>
        <li onClick={()=>setmenu('mobile-app')} className={menu==="mobile-app"?'active':''}>Mobile-App</li>
        <li onClick={()=>setmenu('contact-us')} className={menu==="contact-us"?'active':''}>Contact Us</li>
       </ul>
       
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" className=""></img>
        <img src={assets.basket_icon} alt="" className=""></img>
        <button className="" >Singup</button>
       </div>

    </div>)
}
export default Navbar