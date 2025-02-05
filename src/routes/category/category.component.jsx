import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { selectCategories } from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux'
import './category.styles.scss'
const Category = () => {
  const { category } = useParams()
  const categories = useSelector(selectCategories)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categories.find((cat) => cat.category === category)?.products)
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
