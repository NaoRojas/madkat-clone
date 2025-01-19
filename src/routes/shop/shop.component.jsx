import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
const Shop = () => {
  const { categories } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categories).map((category) => (
        <>
          <h2>{category}</h2>
          <div className="product-list">
            {categories[category].products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ))}
    </>
  )
}

export default Shop
