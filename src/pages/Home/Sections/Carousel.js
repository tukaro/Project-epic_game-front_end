import React from 'react'
import styled from 'styled-components'
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logoright1,
  logoright2,
  logoright3,
  logoright4,
  logoright5,
  logoright6,
} from '../assets'
import {THEMES} from '../../../Theme/ColorTheme.js'
const CarouselContainer = styled.div`
  font-weight: 500;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
`

const LeftCarousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 16px;
`
const Left = styled.div`
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);
`
const ContentLeft = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`
const ActiveImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 1;
  animation: 200ms cubic-bezier(0.17, 0.17, 0.23, 1) 200ms 1 normal forwards running;
  visibility: visible;
  color: white;
`
const ContainerImage = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  color: ${THEMES.white245};
  cursor: pointer;

  a{
    text-decoration: none;
  }
`
const PictureGame = styled.picture`
  min-height: 1px;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;

  img{
    transition: opacity 125ms ease-in-out 450ms;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`
const Overlay = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  background: linear-gradient(270deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%, #0B0B0B 100%);
`
const InfoGame = styled.div`
  z-index: 1;
  width: 320px;
  position: absolute;
  left: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  pointer-events: none
`
const DesGame = styled.div`
  
`
const LogoGame = styled.div`
  width: 150px;
  height: 55px;
  margin-bottom: 20px;
  opacity: 1;
  background-image: url(${logo1});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;
  animation: 200ms cubic-bezier(0.69, 0, 0.83, 0.83) 0s 1 normal none running;

  @media (min-width: 1600px) {
    width: 260px;
  }
  @media (min-width: 1440px) {
    width: 220px;
    height: 160px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    width: 200px;
    height: 145px;
    margin-bottom: 25px;
  }
  @media (min-width: 1024px) {
    height: 80px;
    margin-bottom: 17px;
  }
`
const TitleGame = styled.h3`
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const SaleGame = styled.div`
  text-shadow: 0.5px 0.5px 0.5px rgb(0 0 0 / 25%);
  -webkit-transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: opacity 200ms cubic-bezier(0.42, 0, 0.58, 1);
  opacity: 1;
`
const SpanDes = styled.span`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    margin-bottom: 20px;
  }
`
const NameGame = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 1.3333;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 1024px){
    margin-bottom: 10px;
  }
`
const GridDes = styled.div`
  display: grid;
`
const DesContent = styled.div`
  display: -webkit-box;
  line-clamp: 4;
  overflow: hidden;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`
const ButtonSave = styled.div`

`
const MarginButton = styled.div`
  @media (min-width: 768px){
    margin-top: 10px;
    width: max-content;
  }
`
const ButtonBottom = styled.a`
  font-size: 12px;
  line-height: 1.364;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  color: ${THEMES.white245};
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  padding: 0 20px;
  background-color: ${THEMES.white255};
  color: ${THEMES.black0};
  height: 50px;
  width: auto;
  min-width: auto;
`
const FlexButton = styled.div`
  display: flex;
  a{
    min-width: 150px;
  }
`
const RightCarousel = styled.div`
  margin-left: 16px;
  font-weight: 400;
  width: 160px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;

  @media (min-width: 1024px){
    width: 176px;
    margin-left: 16px;
  }
  @media (min-width: 1440px){
    width: 180px;
    margin-left: 20px;
  }
  @media (min-width: 1600px){
    width: 256px;
    margin-left: 32px;
  }

`
const ItemGame = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
`
const DivItem = styled.div`
  display: flex;
  height: 16.666666666666668%;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 1280px){
    border-radius: 16px;
  }
`
const LiItem = styled.li`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;

  &.active{
    background-color: ${THEMES.white01};
  }

  &:hover{
    background-color: ${THEMES.white41};
  }
`
const DetailGame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding-right: 10px;
  /* transition: background-color 200ms cubic-bezier(0.17, 0.17, 0.23, 1.00); */
`
const DetailImage = styled.div`
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  flex-basis: 28px;
  z-index: 1;
  margin: 0 10px;

  @media (min-width: 1024px){
    flex-basis: 25px;
  }
  @media (min-width: 1280px){
    flex-basis: 40px;
    border-radius: 8px;
  }
  @media (min-width: 1440px){
    margin: 0 15px;
  }
  @media (min-width: 1600px){
    flex-basis: 43.5px;
  }
  @media (min-width: 1920px){
    flex-basis: 60px;
  }

`
const ImagePadding = styled.div`
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
`
const ImgRight = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`
const NameDetails = styled.div`
  font-size: 12px;
  letter-spacing: 0.17px;
  line-height: 1.5;
  color: ${THEMES.white245};
  z-index: 1;
  @media (min-width: 1440px){
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 1.4;
  }
  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 1.625;
  }

`
const GridDetails = styled.div`
  display: grid;
`
const DetailsNameGame = styled.div`
  display: -webkit-box;
  line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

const ItemRight = ({img, name, styleContainer}) => {
  return (
    <DivItem>
      <LiItem className={styleContainer}>
        <DetailGame>
          <DetailImage>
            <ImagePadding>
              <ContentLeft>
                <ImgRight src={img} alt="" />
              </ContentLeft>
            </ImagePadding>
          </DetailImage>
          <NameDetails>
            <GridDetails>
              <DetailsNameGame>
                {name}
              </DetailsNameGame>
            </GridDetails>
          </NameDetails>
        </DetailGame>
      </LiItem>
    </DivItem>
  )
}

function Carousel() {
  return (
    <CarouselContainer>
      <LeftCarousel>
        <Left>
          <ContentLeft>
            <ActiveImage>
              <ContainerImage>
                <a href="">
                  <div className="slide-asset">
                    <div className="picture">
                      <PictureGame>
                        <img src={img1} alt="" />
                      </PictureGame>
                    </div>
                    <Overlay/>
                  </div>
                </a>
                <InfoGame>
                  <DesGame>
                    <LogoGame/>
                    <TitleGame>Summer Sale 2022</TitleGame>
                    <SaleGame>
                      <NameGame>SALES AND SPECIALS</NameGame>
                      <SpanDes>
                        <GridDes>
                          <DesContent>Things are heating up with our Summer Sale! Save up to 75% on top titles and finish the season off right.</DesContent>
                        </GridDes>
                      </SpanDes>
                    </SaleGame>
                  </DesGame>
                  <ButtonSave>
                    <MarginButton>
                      <FlexButton>
                        <ButtonBottom>Save now</ButtonBottom>
                      </FlexButton>
                    </MarginButton>
                  </ButtonSave>
                </InfoGame>
              </ContainerImage>
            </ActiveImage>
          </ContentLeft>
        </Left>
      </LeftCarousel>
      <RightCarousel>
        <ItemGame>
          <ItemRight name="Summer Sale 2022" img={logoright1} styleContainer="active"/>
          <ItemRight name="Genshin Impact" img={logoright2}/>
          <ItemRight name="Rumbleverse" img={logoright3}/>
          <ItemRight name="Goat Simulator 3" img={logoright4}/>
          <ItemRight name="Fall Guys" img={logoright5}/>
          <ItemRight name="Madden NFL 23" img={logoright6}/>
        </ItemGame>
      </RightCarousel>
    </CarouselContainer>
  )
}

export default Carousel