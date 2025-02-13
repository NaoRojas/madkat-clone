import { createSelector } from "reselect"

const selectCartReducer = (state) => {
  console.log(state, 'state')
  return state.cart
}

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    console.log(cart, 'cart')
    return cart.cartItems
  }
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.showCartDropdown
)

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)
