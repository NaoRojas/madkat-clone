import './checkout.styles.scss'
import Button from '../../components/button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from '../../store/cart/cart.actions'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'

const Checkout = () => {
  const dispatch = useDispatch()

  const cartTotal = useSelector(selectCartTotal)
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.imageUrls[0]} alt="" />
              <div className="item-details">
                <div className="header">
                  <span className="name">{item.name}</span>
                  <span
                    className="material-icons"
                    onClick={() => dispatch(clearItemFromCart(cartItems, item))}
                  >
                    close
                  </span>
                </div>

                <div className="footer">
                  <div className="quantity-conatiner">
                    <span
                      className="material-icons"
                      onClick={() =>
                        dispatch(removeItemToCart(cartItems, item))
                      }
                    >
                      arrow_back_ios
                    </span>
                    <span className="quantity">{item.quantity}</span>
                    <span
                      className="material-icons"
                      onClick={() => dispatch(addItemToCart(cartItems, item))}
                    >
                      arrow_forward_ios
                    </span>
                  </div>

                  <div className="price">${item.price * item.quantity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-container">
          <span className="total">Total: ${cartTotal}</span>
          <Button>Pay Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
