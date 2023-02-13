import React from 'react'
import HeaderFooter from '../../components/HeaderFooter.js'
import {
  Carousel,
  HorizontalView,
  TwoGame,
  FreeGame,
  GridGame,
  FixedView,
  Catalog,
} from './Sections'
import '../style.css'

function Home() {
  return (
    <>
      <div className="carousel-view">
        <Carousel/>
      </div>
      <div className="carousel-view">
        <HorizontalView category="Summer Spotlight" nextButton="nextSummer" prevButton="prevSummer"/>
      </div>
      <div className="carousel-view">
        <TwoGame/>
      </div>
      <div className="carousel-view">
        <FreeGame/>
      </div>
      <div className="carousel-view">
        <GridGame/>
      </div>
      <div className="carousel-view">
        <HorizontalView category="Games with Achievements" nextButton="nextAchievements" prevButton="prevAchievements"/>
      </div>
      <div className="carousel-view">
        <TwoGame/>
      </div>
      <div className="carousel-view">
        <HorizontalView category="Recently Updated" nextButton="nextUpdated" prevButton="prevUpdated"/>
      </div>
      <div className="carousel-view">
        <TwoGame/>
      </div>
      <div className="carousel-view">
        <HorizontalView category="Most Popular" nextButton="nextPopular" prevButton="prevPopular"/>
      </div>
      <div className="carousel-view">
        <FixedView/>
      </div>
      <div className="carousel-view">
        <Catalog/>
      </div>
    </>
  )
}

export default Home