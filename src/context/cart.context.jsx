import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  showCartDropdown: false,
  toggleShowCartDropdown: () => null,
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCartDropdown, setShowCartDropdown] = useState(false)

  const toggleShowCartDropdown = () => {
    setShowCartDropdown((showCartDropdown) => !showCartDropdown)
  }

  const value = {
    cartItems,
    setCartItems,
    showCartDropdown,
    toggleShowCartDropdown,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
