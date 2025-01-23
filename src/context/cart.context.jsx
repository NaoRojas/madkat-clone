import { createContext, useEffect, useReducer, useState } from 'react'
import { createAction } from '../utils/reducer/reducer.utils.js'
const addToCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...item, quantity: 1 }]
}

const removeItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id)
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === item.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 }
    }
    return cartItem
  })
}

const clearItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartHidden: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
}

export const INITIAL_STATE = {
  cartItems: [],
  showCartDropdown: false,
  cartTotal: 0,
  cartItemsCount: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  )

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCart(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const toggleCartHidden = () => {
    setIsCartOpen(!isCartOpen)
  }

  const value = {
    isCartOpen,
    toggleCartHidden,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
