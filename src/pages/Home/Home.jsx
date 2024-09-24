import { useState } from 'react'
import Exploremenu from '../../component/Navbar/Exploremenu/Exploremenu'
import Header from '../../component/Navbar/Header/Header'
import './Home.css'
import Fooddisplay from '../../component/Navbar/Fooddisplay/Fooddiplay'
import AppDownload from '../../component/Navbar/AppDownload/AppDownload'

const Home =()=>{

    const[category,setcategory]=useState('All')
    
    return(<div>
        <div>
       <Header></Header>
       </div>
       <div>
        <Exploremenu category={category} setcategory={setcategory}></Exploremenu>
        <Fooddisplay category={category} setcategory={setcategory}></Fooddisplay>
        <AppDownload/>
        </div>
        
    </div>)
  
}
export default Home