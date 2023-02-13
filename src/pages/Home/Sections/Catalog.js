import React from 'react'
import styled from 'styled-components'
import {THEMES} from '../../../Theme/ColorTheme.js'
import { CatalogImage } from '../../Home/assets'
const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 25px;
  }
`
const LeftCatalog = styled.div`
  flex: 1;
  position: relative;
`
const LeftBg = styled.div`
  border-radius: 16px;
  background: rgb(0, 0, 0) linear-gradient(to right bottom, ${THEMES.black0}, ${THEMES.blue120});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  color: ${THEMES.white245};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
  }
`
const LinkImage = styled.a``
const PaddingLeft = styled.div`
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);

  &::after{
    content: '';
    border-radius: 16px;;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: ${THEMES.white41};
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    transition: opacity 125ms ease-in-out;
  }
  &:hover::after{
    opacity: 1;
  }
`
const BorderImage = styled.div`
  position: relative;
  border-radius: 16px;

  @media (min-width: 768px) {
    display: block;
    overflow: hidden;
  }
`
const ImageLeft = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;

  img{
    width: 100%;
    border-radius: 16px;
  }
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  opacity: 1;
  transition: opacity 125ms ease-in-out;
`
const RightCatalog = styled.div`
  width: 100%;
  z-index: 2;
  padding-left: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    width: 35%;
    min-height: 100%;
    padding-left: 25px;
    padding-right: 0;
  }
  @media (min-width: 1024px) {
    padding-left: 32px;
  }
  @media (min-width: 1600px) {
    padding-left: 64px;
  }
`
const TitleCatalog = styled.div`
  width: 100%;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-bottom: 5px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 15px;
  }
  @media (min-width: 1440px) {
    padding-bottom: 30px;
  }
  @media (min-width: 1600px) {
    padding-bottom: 40px;
  }
`
const TextTitle = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;
  @media (min-width: 1024px){
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1600px){
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.4px;
  }
`
const TextGrid = styled.div`
  display: grid;
`
const WordTitle = styled.div`
  overflow: hidden;
  word-wrap: break-word;
  line-clamp: 2;
`
const DesCatalog = styled.div`
  width: 100%;
  @media (min-width: 768px){
    padding-bottom: 15px;
  }
  @media (min-width: 1024px){
    padding-bottom: 30px;
  }
  @media (min-width: 1440px){
    padding-bottom: 50px;
  }
  @media (min-width: 1600px){
    padding-bottom: 70px;
  }
`
const SpanDes = styled.span`
  color: ${THEMES.white06};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 125ms ease-in-out;
  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const WordDes = styled.div`
  overflow: hidden;
  word-wrap: break-word;
  line-clamp: 3;
`
const ButtonCatalog = styled.div`
  display: flex;
  flex-direction: column;
`
const MarginButton = styled.div`
  margin-top: 10px;
  @media (min-width: 1280px){
    margin-top: 15px;
  }
`
const FlexButton = styled.div`
  display: flex;
`
const Button = styled.a`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  color: ${THEMES.white245};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background-color: ${THEMES.white245};
  color: ${THEMES.black18};
  height: 50px;
  width: auto;
  min-width: auto;
  @media (min-width: 1600px) {
    font-size: 14px;
    letter-spacing: 1px;
  }

  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
    transition: border 125ms ease-in-out;
  }
  &::after{
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transition: opacity 200ms ease;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    opacity: 0;
  }
`

const Catalog = () => {
  return (
    <div>
      <FlexRow>
        <LeftCatalog>
          <LeftBg>
            <LinkImage>
              <BorderImage>
                <PaddingLeft>
                  <ImageLeft>
                    <Image src={CatalogImage} />
                  </ImageLeft>
                </PaddingLeft>
              </BorderImage>
            </LinkImage>
          </LeftBg>
        </LeftCatalog>
        <RightCatalog>
          <TitleCatalog>
            <LinkImage>
              <TextTitle>
                <TextGrid>
                  <WordTitle>Explore Our Catalog</WordTitle>
                </TextGrid>
              </TextTitle>
            </LinkImage>
          </TitleCatalog>
          <DesCatalog>
            <SpanDes>
              <TextGrid>
                <WordDes>
                Browse by genre, features, price, and more to find your next favorite game.
                </WordDes>
              </TextGrid>
            </SpanDes>
          </DesCatalog>
          <ButtonCatalog>
            <MarginButton>
              <FlexButton>
                <Button>
                  Learn More
                </Button>
              </FlexButton>
            </MarginButton>
          </ButtonCatalog>
        </RightCatalog>
      </FlexRow>
    </div>
  )
}

export default Catalog