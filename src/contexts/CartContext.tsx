import { createContext, PropsWithChildren, useContext } from 'react'
import { CartItem, Product } from '../../data'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

interface CartContextValue {
  cartItems: CartItem[]
  increaseProductToCart: (product: Product, quantity: number) => void
  decreaseProductFromCart: (productId: string, newQuantity: number) => void
  deleteProductFromCart: (product: Product) => void
  clearProductsFromCart: () => void
  totalPrice: number
  totalProductsInCart: number
}

const CartContext = createContext<CartContextValue>(null as any)

export const useCart = () => useContext(CartContext)

export function CartProvider(props: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStorageState<CartItem[]>([], 'cart')

  const increaseProductToCart = (product: Product, quantity: number) => {
    if (!cartItems.some(cartItem => cartItem.id === product.id)) {
      setCartItems([...cartItems, { ...product, quantity }])
    } else {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        }
        return cartItem
      })
      setCartItems(updatedCartItems)
    }
  }

  const decreaseProductFromCart = (productId: string, newQuantity: number) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productId)
    if (!existingCartItem) {
      return
    }
    if (newQuantity <= 0) {
      const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== productId)
      setCartItems(updatedCartItems)
    } else {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === productId) {
          return { ...cartItem, quantity: newQuantity }
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

  const clearProductsFromCart = () => {
    setCartItems([])
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
        clearProductsFromCart,
        totalPrice,
        totalProductsInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
