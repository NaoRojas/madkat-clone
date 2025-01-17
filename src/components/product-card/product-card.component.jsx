import './product-card.styles.scss'
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
  const { name, price, imageUrls } = product
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img className="main-image" src={imageUrls[0]} alt={product.name} />
        <img className="hover-image" src={imageUrls[1]} alt={product.name} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  )
}

export default ProductCard
