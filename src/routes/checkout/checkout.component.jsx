import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'
import Button from '../../components/button/button.component'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
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
                  <span>x</span>
                </div>

                <div className="footer">
                  <span className="quantity">Quantity: {item.quantity}</span>
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
