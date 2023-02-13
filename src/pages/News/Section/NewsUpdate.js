import React from 'react'
import styled from 'styled-components'
import {Pagination} from '../../Browse/Section/CategoryGame.js'
import { THEMES } from "../../../Theme/ColorTheme.js";
import ListNews from './ListNews.js'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
const Grow = styled.div`
  flex-grow: 1;
  overflow: hidden;
`

const Section = styled.section`
  margin-bottom: 60px;

  &:last-child{
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 70px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 80px
  }
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`
const TopContainer = styled.div`
  padding-bottom: 16px;
`
const TitleNews = styled.h1`
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 10px;

  @media (min-width: 1600px){
    margin-left: 10px;
    margin-right: 10px;
  }
`
const GameNews = styled.div`
  margin-bottom: 60px;
  @media (min-width: 1600px){
    margin-left: 10px;
    margin-right: 10px;
  }
`
const FlexCard = styled.div`
  display: flex;
  justify-content: space-between;
`
const BorderCard = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: calc(9 / 16 * 100%);

  &::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.20));
    transition: all 0.5s ease;
    opacity: 0;
    z-index: 3;
  }
`
const ReadMore = styled.div`
  color: #fff;
  margin-top: auto;

  & > span {
    border-bottom: 1px solid rgba(255,255,255, 0.20);
    transition: all 0.5s ease;
    display: inline-block;
    align-items: flex-end;
  }
`
const Description = styled.h2`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  margin-bottom: 15px;
`
const CardGame = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  
  &:first-child {
    margin-right: 20px;
  }
  & > div {
    height: 100%;
  }

  &:hover {
    ${BorderCard}::after{
      opacity: 1;
    }
    ${ReadMore} > span {
      border-color: #fff;
    }
    ${Description} {
      color: #fff;
    }
  }

`
const LinkGame = styled.a`
  display: flex;
  color: #fff;
  flex-direction: column;
  height: 100%;
  flex: 1;
`
const ContentCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 15px;
`
const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 1;
  transition: opacity 125ms ease-in-out 450ms;
`
const DateNews = styled.div`
  color: ${THEMES.white245};
  font-size: 11px;
  letter-spacing: 0.5px;
  line-height: 1.625;
  text-transform: uppercase;
  margin-bottom: 5px;

  & > span {
    position: relative;
    padding: 0 10px;
  }

  & > span:first-child {
    padding-left: 0px;
  }
`
const LiNews = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  width: 100%;
  padding-top: 20px;
  margin-top: 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.20);

  @media (min-width: 1600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const UlNewsletter = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  max-width: 100%;

  & > li:not(:last-child){
    margin-bottom: 30px;
  }

  @media (min-width: 1600px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin-left: auto;

    & > li:not(:last-child){
      margin-bottom: 20px;
    }
  }
`
const CardUpdateGame = ({image, date, description}) => {
  return(
    <CardGame>
      <div>
        <LinkGame>
          <BorderCard>
            <div>
              <ImageCard src={`${image}`} />
            </div>
          </BorderCard>
          <ContentCard>
            <DateNews>
              <span>{date}</span>
            </DateNews>
            <Description>{description}</Description>
            <ReadMore>
              <span>Read more</span>
            </ReadMore>
          </ContentCard>
        </LinkGame>
      </div>
    </CardGame>
  )
} 
const NewsUpdate = () => {
  return (
    <FlexContainer>
      <Grow>
        <Section>
          <Container>
            <TopContainer>
              <TitleNews>
                <span>News</span>
              </TitleNews>
              <GameNews>
                <FlexCard>
                  <CardUpdateGame 
                    image="https://cdn2.unrealengine.com/fortnite-epic-summerslam-1920x1080-791b24434d67.jpg?h=480&resize=1&w=854" 
                    date="8d ago" 
                    description="Fortnite, Rocket League, and Fall Guys form a triple threat in the Epic SummerSlam!" 
                  />
                  <CardUpdateGame 
                    image="https://cdn2.unrealengine.com/saints-row-pc-hands-on-pc-preview-1920x1080-0a214eb4cb87.jpg?h=480&resize=1&w=854" 
                    date="13d ago" 
                    description="Saints Row PC Hands-On PC Preview" 
                  />
                </FlexCard>
              </GameNews>
              <ListNews/>
            </TopContainer>
            <Pagination />
          </Container>
        </Section>
      </Grow>
    </FlexContainer>
  )
}

export default NewsUpdate