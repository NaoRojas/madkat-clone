import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { imgUrl, name } = category
  return (
    <div className="category-container">
      <img src={imgUrl} alt="" />
      <div className="collectionListItem__info">
        <div className="collectionListItem__inner">
          <div className="collectionListItem__padding">
            <h2 className="collectionListItem__name">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
