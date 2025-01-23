import { CART_ACTION_TYPES } from "./cart.types"

export const INITIAL_STATE = {
  cartItems: [],
  showCartDropdown: false,
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown,
      }
    default:
      return state
  }
}