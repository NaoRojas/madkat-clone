import { CART_ACTION_TYPES } from "./cart.types"

export const INITIAL_STATE = {
  cartItems: [],
  showCartDropdown: false,

}

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        carItems: payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}