import React, { createContext, useState, useEffect } from 'react'
// import SHOP_DATA from '../data/categories.json'
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({})
  const value = { categories }

  // useEffect(() => {
  //   // This Line is to only add the collection once to the firestore
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      const categoriesToArray = Object.entries(categories).map(
        ([key, value]) => ({
          category: key,
          ...value,
        })
      )
      setCategories(categoriesToArray)
      console.log(categoriesToArray)
    }
    fetchCategories()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
