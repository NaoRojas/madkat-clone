import './shop.styles.scss'
import { Routes, Route } from 'react-router-dom'
import Categories from '../categories/categories.component'
import Category from '../category/category.component'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/categories.actions'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      const categoriesToArray = Object.entries(categories).map(
        ([key, value]) => ({
          category: key,
          ...value,
        })
      )
      dispatch(setCategories(categoriesToArray))
    }
    fetchCategories()
  }, [])

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
