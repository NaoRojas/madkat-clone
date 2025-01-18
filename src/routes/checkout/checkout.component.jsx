import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'
import Button from '../../components/button/button.component'

const Checkout = () => {
  const { cartItems, cartTotal, removeItem, addToCart } =
    useContext(CartContext)
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
                  <span className="material-icons">close</span>
                </div>

                <div className="footer">
                  <div className="quantity-conatiner">
                    <span
                      className="material-icons"
                      onClick={() => removeItem(item)}
                    >
                      arrow_back_ios
                    </span>
                    <span className="quantity">{item.quantity}</span>
                    <span
                      className="material-icons"
                      onClick={() => addToCart(item)}
                    >
                      arrow_forward_ios
                    </span>
                  </div>

                  <div className="price">{item.price}</div>
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
