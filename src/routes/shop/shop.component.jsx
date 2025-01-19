import { useContext } from 'react'
import { ProductsContext } from '../../context/products.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className="product-list">
      {products[0].products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
