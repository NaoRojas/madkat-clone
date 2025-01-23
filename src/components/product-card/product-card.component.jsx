import './product-card.styles.scss'
import Button from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.actions'

const ProductCard = ({ product }) => {
  const { name, price, imageUrls } = product
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img className="main-image" src={imageUrls[0]} alt={product.name} />
        <img className="hover-image" src={imageUrls[1]} alt={product.name} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
