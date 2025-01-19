import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import './categories.styles.scss'
import Directory from '../../components/directory/directory.component'
const Categories = () => {
  const { categories } = useContext(CategoriesContext)

  return <>{categories.length && <Directory categories={categories} />}</>
}

export default Categories
