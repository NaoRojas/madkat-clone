import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"


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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCart(cartItems, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeItem(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearItem(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
