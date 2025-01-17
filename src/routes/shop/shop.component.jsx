import SHOP_DATA from '../../data/shop-data.json'

const Shop = () => {
  return (
    <div className="shop">
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id} className="shop-item">
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Shop
