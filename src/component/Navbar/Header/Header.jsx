import { assets } from "../../../assets/assets"
import './Header.css'

const Header = () => {
    return (<div className='header'>
        <div className="img" style={{
            backgroundImage: `url(${assets.header_img})`,
            backgroundSize: "cover",
            width: '100%',
            height: '100%',
            borderRadius:'10px'
            
        }}>
            <div className='header-content'>
            <h1 >Order your favourite food here</h1>
            <p >Choose from a divers featuring a delectable of dish crafted with <br></br>the finest ingredients and culinary expertise. </p>
            <button>View Menu</button>
            </div>

        </div>
        </div>)

}
export default Header