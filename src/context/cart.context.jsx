import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => null,
  showCartDropdown: false,
  toggleShowCartDropdown: () => null,
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCartDropdown, setShowCartDropdown] = useState(false)

  const toggleShowCartDropdown = () => {
    setShowCartDropdown((showCartDropdown) => !showCartDropdown)
  }

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const value = {
    cartItems,
    setCartItems,
    showCartDropdown,
    toggleShowCartDropdown,
    addToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
