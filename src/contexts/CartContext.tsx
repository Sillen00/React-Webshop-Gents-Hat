import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { CartItem, Product } from '../../data'

// Bestämmer vad som ska skickas över kontexten
interface CartContextValue {
  cartItems: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
}

// Skapar kontexten, alternativ till props och inte state
const CartContext = createContext<CartContextValue>(null as any)

// Skapar en smidigt liten hook för att konsumera innehållet i kontexten
export const useCart = () => useContext(CartContext)





// Skapar en behållare för state och funktionalitet bundet till state
// Samt lägger till kontexten i appen
export function CartProvider(props: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addProductToCart = (product: Product) => {
    // kolla om produkten redan finns i cart Items
    // isf öka antalet
    // annars lägg till ny
    console.log('Lägger till produkten...')
    setCartItems([...cartItems, product]) // Hur ska jag få produkten till att vara en cardItem??

    // if (cartItems.includes(product)) {
      
    // } else {

    // }
  }
  const removeProductFromCart = (product: Product) => {
    console.log('Tar bort produkten...')
  }

  const cartCount = cartItems.length

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart, removeProductFromCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
