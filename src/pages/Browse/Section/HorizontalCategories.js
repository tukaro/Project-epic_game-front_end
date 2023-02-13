import React from 'react'
import {THEMES} from '../../../Theme/ColorTheme.js'
import styled from 'styled-components'
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
import { Arrow } from '../../../svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation , Parallax } from 'swiper';

const Content = styled.div`
  max-height: 350px;
  opacity: 1;
  transition: max-height 350ms,margin 350ms,opacity 350ms,ease-in-out;
  margin: 30px 0 40px;
  width: 100%;

  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1600px) {
    margin-bottom: 60px;
    margin-top: 40px;
  }
`
// top
const MarginContent = styled.div`
  margin-bottom: 15px;
`
const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin: 0 0 18px;
  }
`
const TopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.2px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.5px;
  }
`
const SvgSpan = styled.span`
  margin-left: 5px;
  line-height: 0;
  width: 8px;
  height: 8px;
  display: flex;
  transition: all 125ms ease-in-out;
`
const Link = styled.a`
  &:hover{
    ${SvgSpan}{
      margin-left: 5px;
      -webkit-transform: translateX(4px);
      -moz-transform: translateX(4px);
      -ms-transform: translateX(4px);
      transform: translateX(4px);
    }
  }
`
const TopRight = styled.div`
  display: flex;
`
const ButtonTop = styled.div`
  margin-left: 10px;
`
const ButtonNavigate = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  background-color: inherit;
  color: inherit;
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled{
    cursor: default;
    pointer-events: none;
  }

  &::before{
    content: '';
    transition: all 125ms ease-in-out;
    position: absolute;
    background-color: ${THEMES.black32};
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`
const SvgNavigate = styled.span`
  display: block;
  line-height: 0;
  width: 12px;
  height: 12px;
  z-index: 1;

  svg{
    width: 100%;
    height: 100%;
  }
  &.rotate{
    transform: rotate(180deg);
  }
  .left{
    transform: rotate(90deg);
  }
`
const Body = styled.div`
  line-height: none;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 1;
`
const CardBg = styled.div`
  background: ${THEMES.black32};
  border-radius: 4px;
  transition: background 125ms ease-in-out;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 10px;
  padding: 15px 0px;
  position: relative;
  overflow: hidden;

  &::before{
    background: ${THEMES.white41};
    content: '';
    position: absolute;
    opacity: 0;
    transition: opacity 125ms ease-in-out;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:hover::before{
    opacity: 1;
  }

  &:last-child{
    margin-right: 0;
  }
  &:first-child{
    margin-left: 0;
  }

  @media (min-width: 768px){
    padding: 20px 0px 15px;
  }
  @media (min-width: 1024px){
    padding: 25px 0px 15px;
  }
  @media (min-width: 1600px){
    padding: 30px 0px 20px;
  }
`
const Card = styled.a``
const ContentCard = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`
const ImageCard = styled.div`
  background: ${THEMES.black32};
  border-radius: 4px;
  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.4));
  overflow: hidden;
  position: relative;
  width: 40%;
  z-index: 2;

  &:nth-child(2){
    filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.4));
    position: absolute;
    z-index: 1;
    transform: translateX(-55%);
  }
  &:nth-child(2)::before{
    background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  &:nth-child(3){
    filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.4));
    position: absolute;
    z-index: 1;
    transform: translateX(55%);
  }
  &:nth-child(3)::before{
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`
const PaddingImage = styled.div`
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
`
const FlexImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`
const ImageGame = styled.img`
  transition: transform 125ms ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  opacity: 1;
`
const NameCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`
const TextName = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.5px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.5px;
  }
`
const CardGame = ({ name, image1, image2, image3}) => {
  return (
    <Card>
      <CardBg>
        <ContentCard>
          <ImageCard>
            <PaddingImage>
              <FlexImage>
                <ImageGame src={image1} />
              </FlexImage>
            </PaddingImage>
          </ImageCard>
          <ImageCard>
            <PaddingImage>
              <FlexImage>
                <ImageGame src={image2} />
              </FlexImage>
            </PaddingImage>
          </ImageCard>
          <ImageCard>
            <PaddingImage>
              <FlexImage>
                <ImageGame src={image3} />
              </FlexImage>
            </PaddingImage>
          </ImageCard>
        </ContentCard>
        <NameCard>
          <TextName>{name}</TextName>
        </NameCard>
      </CardBg>
    </Card>
  )
}
const TopContent = ({ title, prev, next }) => {
  return (
    <>
      <TopLeft>
        <Link>
          <Title>
            {title}
          </Title>
        </Link>
      </TopLeft>
      <TopRight>
        <ButtonTop className={prev}>
          <ButtonNavigate>
            <SvgNavigate className='rotate'>
              <Arrow className='left'></Arrow>
            </SvgNavigate>
          </ButtonNavigate>
        </ButtonTop>
        <ButtonTop className={next}>
          <ButtonNavigate>
            <SvgNavigate>
              <Arrow className='left'></Arrow>
            </SvgNavigate>
          </ButtonNavigate>
        </ButtonTop>
      </TopRight>
    </>
  )
}

function HorizontalCategories({category, prevButton, nextButton}) {
  SwiperCore.use([Navigation]);
  return (
    <div>
      <div>
        <Content>
          <MarginContent>
            <Top>
              <TopContent title={category} prev={prevButton} next={nextButton}/>
            </Top>
          </MarginContent>
          <Body>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              slidesPerGroup={5}
              loop={true}
              navigation={{
                nextEl: `.${prevButton}`,
                prevEl: `.${nextButton}`,
              }}
              className="mySwiper"
            >
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game1} image2={game2} image3={game3} name="Action Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game4} image2={game5} image3={game6} name="Turn Based Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game9} image2={game8} image3={game7} name="Casual Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game10} image2={game11} image3={game12} name="Horror Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game13} image2={game15} image3={game16} name="Indie Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game17} image2={game18} image3={game19} name="Multiplayer Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game20} image2={game21} image3={game22} name="Open World Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game23} image2={game24} image3={game25} name="Platformer Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game26} image2={game27} image3={game29} name="Puzzle Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game30} image2={game31} image3={game32} name="Racing Games" />
              </SwiperSlide>
              <SwiperSlide style={{width: 269.4, marginRight: 20}}>
                <CardGame image1={game33} image2={game34} image3={game35} name="RPG Games" />
              </SwiperSlide>
            </Swiper>
          </Body>
        </Content>
      </div>
    </div>
  )
}

export default HorizontalCategories