import React, { useEffect } from 'react'
import HeaderFooter from '../../components/HeaderFooter.js'
import NewsUpdate from './Section/NewsUpdate.js'

const News = () => {
  useEffect(() => {
    document.title = 'Epic Games News - Latest Blog Articles About Games & The Store';
  })

  return (
    <>
      <NewsUpdate />
    </>
  )
}

export default News