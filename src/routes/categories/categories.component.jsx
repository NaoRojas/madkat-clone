import './categories.styles.scss'
import Directory from '../../components/directory/directory.component'
import {
  selectCategories,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component'

const Categories = () => {
  const categories = useSelector(selectCategories)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return <>{isLoading ? <Spinner /> : <Directory categories={categories} />}</>
}

export default Categories
