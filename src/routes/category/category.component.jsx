import { useContext, useEffect, useState } from 'react'
import './category.styles.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { selectCategories } from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux'

const Category = () => {
  const { category } = useParams()
  const categories = useSelector(selectCategories)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categories.find((cat) => cat.category === category)?.products)
  }, [category, categories])

  return (
    <>
      {products.length ? (
        <>
          <h2>{category}</h2>
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <h2>No products found</h2>
      )}
    </>
  )
}

export default Category
