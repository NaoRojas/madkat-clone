import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'

const CartIcon = ({ toggleCart }) => {
  const cartItems = useSelector(selectCartItems)
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
