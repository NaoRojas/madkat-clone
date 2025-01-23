import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.actions'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const showCartDropdown = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()
  const signOutHandler = async () => {
    await signOutUser()
    // setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo-img"
              src="https://www.madkat.store/images/logo-black.png"
              alt=""
            />
          </Link>
        </div>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon
            toggleCart={() => {
              dispatch(setIsCartOpen(!showCartDropdown))
            }}
          />
        </div>
        {showCartDropdown && <CartDropdown />}
      </div>
      <div className="main">
        <Outlet />
      </div>
    </Fragment>
  )
}

export default Navigation
