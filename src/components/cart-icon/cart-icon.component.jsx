import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </div>
  )
}

export default CartIcon
