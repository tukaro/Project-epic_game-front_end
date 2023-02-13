import React from 'react'
import Footer from '../pages/Home/Sections/Footer.js'
import Header from '../pages/Home/Sections/Header.js'
import SearchTop from '../pages/Home/Sections/SearchTop.js'

const HeaderFooter = ({containerContent}) => {
  return (
    <>
      <Header />
      <main className='main-content'>
        <div className="view">
          <SearchTop />
          <div className="container">
            <div className="game-container">
              {containerContent}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HeaderFooter