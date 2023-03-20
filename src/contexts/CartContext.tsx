import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { CartItem, Product } from '../../data'

// Bestämmer vad som ska skickas över kontexten
interface CartContextValue {
  cartItems: CartItem[]
  increaseProductToCart: (product: Product) => void
  decreaseProductFromCart: (product: Product) => void
  deleteProductFromCart: (product: Product) => void
  totalPrice: number
  totalProductsInCart: number
}

// Skapar kontexten, alternativ till props och inte state
const CartContext = createContext<CartContextValue>(null as any)

// Skapar en smidigt liten hook för att konsumera innehållet i kontexten
export const useCart = () => useContext(CartContext)

// Skapar en behållare för state och funktionalitet bundet till state
// Samt lägger till kontexten i appen
export function CartProvider(props: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const increaseProductToCart = (product: Product) => {
    // kolla om produkten redan finns i cart Items
    // isf öka antalet
    // annars lägg till ny
    // console.log(CartItem.)

    if (!cartItems.some(cartItem => cartItem.id === product.id)) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]) // Hur ska jag få produkten till att vara en cardItem??
    } else {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      setCartItems(updatedCartItems)
    }
  }

  const deleteProductFromCart = (product: Product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id)
    if (!existingCartItem) {
      return
    }
    if (existingCartItem.quantity >= 1) {
      const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== product.id)
      setCartItems(updatedCartItems)
    }
  }

  const decreaseProductFromCart = (product: Product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === product.id)
    if (!existingCartItem) {
      return
    }
    if (existingCartItem.quantity === 1) {
      const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== product.id)
      setCartItems(updatedCartItems)
    } else {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })
      setCartItems(updatedCartItems)
    }
  }

  const totalProductsInCart = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )

  const totalPrice = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseProductToCart,
        decreaseProductFromCart,
        deleteProductFromCart,
        totalPrice,
        totalProductsInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
