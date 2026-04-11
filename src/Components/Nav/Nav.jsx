import React, { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../Context/CartContext'

const Nav = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [cartItems] = useContext(CartContext)
  const [cartCount , setcartCount ] = useState(0)

  useEffect(()=>{
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [] 
      const total = cart.reduce((sum ,total)=> sum + (item.qu)  )
    }
  })
  return (
    <div>Nav</div>
  )
}

export default Nav