import React from 'react';
import GlobalStyles from './Theme/GlobalStyles.js';
import {Home, Browse, News, DetailsGame, Wishlist, FAQ, Help} from './pages'
import {Routes, Route} from 'react-router-dom'
import Header from './pages/Home/Sections/Header.js';
import SearchTop from './pages/Home/Sections/SearchTop.js';
import Footer from './pages/Home/Sections/Footer.js';
import './pages/style.css'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <main className='main-content'>
        <div className="view">
          <SearchTop />
          <div className="container">
            <div className="game-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/news" element={<News />} />
                <Route path="/wishlist" element={<Wishlist />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
