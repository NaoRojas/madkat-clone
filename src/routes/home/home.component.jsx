import { useContext } from 'react'
import Directory from '../../components/directory/directory.component'
import { CategoriesContext } from '../../context/categories.context'
import CATEGORIES_DATA from '../../data/categories-images.json'

const Home = () => {
  const { categories } = useContext(CategoriesContext)
  return <Directory categories={CATEGORIES_DATA} />
}

export default Home
