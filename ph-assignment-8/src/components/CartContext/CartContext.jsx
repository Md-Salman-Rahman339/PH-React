/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react'
export const cartC=createContext();
const CartContext = ({children}) => {
    const [cart,setCart]=useState([]);
    const [wishList, setWishList] = useState([]);
    const addToCart=(item)=>{
        setCart((prevCart)=>[...prevCart,item])

    };
    const addToWishList = (item) => {
        setWishList((prevWishList) => [...prevWishList, item]);
      };
  return (
    <cartC.Provider value={{cart,wishList,addToCart,addToWishList}}>
        {children}
    </cartC.Provider>
  )
}

export default CartContext
