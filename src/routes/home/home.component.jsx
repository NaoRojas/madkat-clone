import Directory from '../../components/directory/directory.component'
import CATEGORIES_DATA from '../../data/categories-images.json'

const Home = () => {
  return <Directory categories={CATEGORIES_DATA} />
}

export default Home
