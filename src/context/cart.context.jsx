import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => null,
  showCartDropdown: false,
  toggleShowCartDropdown: () => null,
  removeItem: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0,
  cartItemsCount: 0,
})

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCartDropdown, setShowCartDropdown] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setCartTotal(total)
  }, [cartItems])

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    setCartItemsCount(count)
  }, [cartItems])

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
    cartTotal,
    cartItemsCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
