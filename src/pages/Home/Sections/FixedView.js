import React from 'react'
import styled from 'styled-components'
import {THEMES} from '../../../Theme/ColorTheme.js'
import {CardGame} from './HorizontalView.js'
import {
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
  game13,
  game15,
  game16,
  game17,
  game18,
  game19,
  game20,
  game21,
  game22,
  game23,
  game24,
  game25,
  game26,
  game27,
  game29,
  game30,
  game31,
  game32,
  game33,
  game34,
  game35,
  game36,
  game37,
  game38,
} from '../../Home/assets'

const TopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
  margin-bottom: 15px;
`
const Title = styled.h2`
  display: flex;
  align-items: center;
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 1.4;
`
const SectionView = styled.section`
  display: flex;
  overflow-x: visible;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
`
const FlexView = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
  width: 100%;
`
const CardSection =  styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 100%;

  &:not(:first-child){
    margin-left: 1rem;
  }
`
const CardMargin = styled.div`
  height: 100%;
  margin-bottom: 0.5rem;
`
const CardFixed  = ({fixedImage, fixedName, fixedEpic, fixedSale, fixedOldPrice, fixedNewPrice}) => {
  return (
    <CardSection>
      <CardMargin>
        <CardGame image={fixedImage} name={fixedName} newEpic={fixedEpic} sale={fixedSale} oldPrice={fixedOldPrice} newPrice={fixedNewPrice} />
      </CardMargin>
    </CardSection>
  )
}
const FixedView = () => {
  return (
    <>
      <TopTitle>
        <Title>
          New To The Epic Games Store
        </Title>
      </TopTitle>
      <div>
        <SectionView>
          <FlexView>
            <CardFixed 
              fixedImage = {game15} 
              fixedName="The Tale of Bistun"
              fixedEpic
              fixedNewPrice="₫168,000"
            />
            <CardFixed 
              fixedImage = {game16} 
              fixedName="Space Trader - Merchant Marine"
              fixedEpic 
              fixedSale="-80%" 
              fixedOldPrice="₫47,000" 
              fixedNewPrice="₫9,400"
            />
            <CardFixed 
              fixedImage = {game17} 
              fixedName="ORB" 
              fixedEpic
              fixedNewPrice="₫56,000"
            />
            <CardFixed 
              fixedImage = {game18} 
              fixedName="Flatout" 
              fixedEpic
              fixedNewPrice="₫47,000"
            />
            <CardFixed 
              fixedImage = {game20} 
              fixedName="Disciples Rise of the Elves Gold" 
              fixedEpic
              fixedNewPrice="₫56,000"
            />
          </FlexView>
        </SectionView>
      </div>
    </>
  )
}

export default FixedView