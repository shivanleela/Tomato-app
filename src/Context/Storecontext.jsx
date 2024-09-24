import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

 export  const Storecontext= createContext(null)
 const StorecontextProvider= (props)=>{

    const [cartItem,setcartItem]=useState({})

    const addTocart=(itemId)=>{
        if(!cartItem[itemId]){
            setcartItem((prev)=>({...prev,[itemId]:(prev[itemId]||0)+1,}))
        }
        else{
            setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromcart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
 

    useEffect(()=>{
         console.log(cartItem)

    },[cartItem])

    const contextvalue={
        food_list,
        setcartItem,
        cartItem,
        addTocart,
        removeFromcart
        
    }

    return(<Storecontext.Provider value={contextvalue}>
        {props.children}
    </Storecontext.Provider>)
 }
 export default StorecontextProvider