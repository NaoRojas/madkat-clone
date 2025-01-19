import { useContext, useEffect, useState } from 'react'
import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

const Category = () => {
  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categories[category].products)
  }, [category, categories])

  return (
    <>
      <h2>{category}</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Category
