import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return () => unsubscribe()

    // The dispacth is no need as a dependency because it is a function that will never change
    // So we can keep it as it is
  }, [])


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Shop />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />

      </Route>
    </Routes>
  );
};

export default App;