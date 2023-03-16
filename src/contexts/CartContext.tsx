import React, { createContext, useContext, useState } from 'react'
import { CartItem, Product } from '../../data'

// Bestämmer vad som ska skickas över kontexten
interface CartContextValue {
  cartItems: CartItem[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
}

// Skapar kontexten, alternativ till props och inte state
const CartContext = createContext<CartContextValue>(null as any)

// Skapar en smidigt liten hook för att konsumera innehållet i kontexten
export const useCart = () => useContext(CartContext);

// Skapar en behållare för state och funktionalitet bundet till state
// Samt lägger till kontexten i appen
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addProductToCart = (product: Product) => {
    // kolla om produkten redan finns i cart Items
    // isf öka antalet
    // annars lägg till ny
    console.log('Lägger till produkten...')
  }
  const removeProductFromCart = (product: Product) => {
    console.log('Tar bort produkten...')
  }

  const cartCount = cartItems.length

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
