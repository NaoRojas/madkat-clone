import React, { createContext, useState, useEffect, use } from 'react'
import SHOP_DATA from '../data/categories.json'
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
  // useEffect(() => {
  //   // This Line is to only add the collection once to the firestore
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  const [products, setProducts] = useState(SHOP_DATA)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
