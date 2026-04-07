import React, { createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {    //children mane er ei provider er moddhe jotogulo component rakha hbe(cart,product,etc) sob e children hisabe pabe. 
    const [cartItems, setCartItems ] = useState(() => {
        const stored = localStorage.getItem('cart')
        return stored ? JSON.parse(stored) : [];//kkk
    })

    useEffect(()=> {
        localStorage.setItem('cart',JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (item) => {
        const exists = cartItems.find(cart => cart.id === item.id)
         if(!exists){
            setCartItems(prev =>[...prev ,item] )
         }
    }
    
}