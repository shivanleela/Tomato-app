import { useContext} from 'react'
import { assets } from '../../../assets/assets'
import './Fooditem.css'
import { Storecontext } from '../../../Context/Storecontext'


const Fooditem=({id,name,price,description,image})=>{
 
     const {cartItem,addTocart,removeFromcart}=useContext(Storecontext)

    return(<div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt=''></img>

            {/*ternary operator */}

            {

            !cartItem[id]
            ?(<img src={assets.add_icon_white} className='add'onClick={()=>addTocart(id)} alt=''></img>)
            :(<div className='food-item-counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeFromcart(id)} alt=''></img>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addTocart(id)} alt=''></img>
            </div>)
            
            }
        </div>

        <div>
            <div className="food-item-name-rating">
                <img src={assets.rating_starts} alt='/'></img>
                <div className="food-item-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p className='price'>${price}</p>
                </div>
            </div>            
        </div>
       

</div>
    )
}
export default Fooditem