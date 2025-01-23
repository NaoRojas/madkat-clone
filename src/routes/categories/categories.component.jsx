import { useContext } from 'react'
import './categories.styles.scss'
import Directory from '../../components/directory/directory.component'
import { selectCategories } from '../../store/categories/categories.selector'

const Categories = () => {
  const categories = useSelector(selectCategories)

  return <>{categories.length && <Directory categories={categories} />}</>
}

export default Categories
