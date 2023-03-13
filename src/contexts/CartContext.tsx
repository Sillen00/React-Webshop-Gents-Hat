import React, { createContext, useState } from 'react'

interface CartContextType {
  itemCount: number
  incrementItemCount: () => void
}

export const CartContext = createContext<CartContextType>({
  itemCount: 0,
  incrementItemCount: () => {},
})

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemCount, setItemCount] = useState(0)

  const incrementItemCount = () => {
    setItemCount(count => count + 1)
  }

  return (
    <CartContext.Provider value={{ itemCount, incrementItemCount }}>
      {children}
    </CartContext.Provider>
  )
}
