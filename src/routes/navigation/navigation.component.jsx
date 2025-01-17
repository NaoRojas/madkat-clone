import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { useContext } from 'react'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://www.madkat.store/images/logo-black.png"
            alt=""
          />
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
