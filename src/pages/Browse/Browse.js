import React, { useEffect } from 'react'
import HeaderFooter from '../../components/HeaderFooter.js'
import HorizontalCategories from './Section/HorizontalCategories.js'
import CategoryGame from './Section/CategoryGame.js'

const Browse = () => {
  useEffect(() => {
    document.title = 'Epic Games Store | Official Site';
  })

  return (
    <>
      <HorizontalCategories category="Popular Genres" nextButton="nextSummer" prevButton="prevSummer" />
      <CategoryGame />
    </>
  )
}

export default Browse