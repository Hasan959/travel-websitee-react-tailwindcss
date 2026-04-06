import React, { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {    //children mane er ei provider er moddhe jotogulo component rakha hbe(cart,product,etc) sob e children hisabe pabe. 
    const [cartItems, setCartItems ] = useState(() => {
        const stored = localStorage.getItem('cart')
        return stored ? JSON.parse(stored) : [];kkk
    })
    
}