import './categories.styles.scss'
import Directory from '../../components/directory/directory.component'
import { selectCategories } from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux'

const Categories = () => {
  const categories = useSelector(selectCategories)

  return (
    <>
      {categories && categories?.length && (
        <Directory categories={categories} />
      )}
    </>
  )
}

export default Categories
