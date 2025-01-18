import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => null,
  showCartDropdown: false,
  toggleShowCartDropdown: () => null,
  removeItem: () => null,
  clearItemFromCart: () => null,
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

  const removeItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    }
  }

  const clearItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }

  const value = {
    cartItems,
    setCartItems,
    showCartDropdown,
    toggleShowCartDropdown,
    addToCart,
    removeItem,
    clearItemFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
