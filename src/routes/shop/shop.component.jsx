import './shop.styles.scss'
import { Routes, Route } from 'react-router-dom'
import Categories from '../categories/categories.component'
import Category from '../category/category.component'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategoriesStartAsync } from '../../store/categories/categories.actions'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync())
  }, [])

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
