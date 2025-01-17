import React, { createContext, useState } from 'react'
import SHOP_DATA from '../data/categories.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
