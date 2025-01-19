import { Link } from 'react-router-dom'
import CategoryItem from '../category-item/category-item.component'

import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Link to={`/shop/${category.category}`} key={category.name}>
          <CategoryItem key={category.name} category={category} />
        </Link>
      ))}
    </div>
  )
}

export default Directory
