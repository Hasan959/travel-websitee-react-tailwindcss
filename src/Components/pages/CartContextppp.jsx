import { Children, createContext, useState } from "react";


export const CartContext = createContext()
export const CartProvider = ({Children}) => {
    const [cartItems,setCartItems ] = useState( () => {
        const stored =localStorage.getItem('cart')
        const stored =localStorage.getItem('cart')

    } )
}



