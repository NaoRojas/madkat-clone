import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
import { Routes, Route } from 'react-router-dom'
import Categories from '../categories/categories.component'
import Category from '../category/category.component'

const Shop = () => {
  const { categories } = useContext(CategoriesContext)
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
