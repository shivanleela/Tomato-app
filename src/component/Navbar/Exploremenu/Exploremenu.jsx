import './Explore.css'
import {menu_list } from "../../../assets/assets"

const Exploremenu =({category,setcategory})=>{
    return(<div className='explore-menu'id='explore-menu'>
        <h1 className=' text-heading'>Explore our menu</h1>
        <p className='explore-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate and your dining experience,one delicious meal at a time</p>


        <div className="explore-menu-list">
            { 
              menu_list.map(function(item,index){
                return(
                <div className='explore-menu-item'  onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} >
                    <img src={item.menu_image} alt='' className={category===item.menu_name?"active":''}/>
                    <p className='font-light'>{item.menu_name}</p>
                    
                </div>)
 
              })  
            }

        </div>
        <hr/>

    </div>
     
    )
}
export default Exploremenu