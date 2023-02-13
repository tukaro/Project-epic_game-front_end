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

`
// top
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px 18px;

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
  line-height: 1.4;
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
// list game
const Body = styled.div`
  line-height: none;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 1;
`
const OverPlus = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity 125ms ease-in-out;
  opacity: 0;
  z-index: 1;
`
const ButtonPlus = styled.button`
  position: relative;
  color: ${THEMES.white245};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CirclePlus = styled.div`
  align-items: center;
  background-color: ${THEMES.black18};
  border-radius: 50%;
  border: 2px solid ${THEMES.white245};
  box-shadow: 0px 0px 6px rgb(0 0 0 / 60%);
  display: flex;
  flex: 0 0 auto;
  height: 20px;
  width: 20px;
  justify-content: center;
  position: relative;
`
const SpinnerPlus = styled.div`
  width: 12px;
  height: 12px;

  &::after,
  &::before{
    background: ${THEMES.white245};
    bottom: 0;
    content: "";
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
  }

  &::before{
    height: 10px;
    width: 2px;
  }
  &::after{
    height: 2px;
    width: 10px;
  }
`
const CardPosition = styled.div`
  position: relative;

  &:hover {
    ${OverPlus}{
      opacity: 1;
    }
  }
`
const Card = styled.a`
  display: block;
  outline: 0;
  border: 0 !important;
`
const ContentCard = styled.div`
  display: block;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  background-color: transparent;
  font-size: 1rem;
  line-height: normal;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
const InCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ImageGame = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 4px;
`
const BgImage = styled.div`
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
  background: linear-gradient(to bottom, ${THEMES.black43}, ${THEMES.black32});
  color: ${THEMES.white06};
  overflow: hidden;
  border-radius: 4px;

  &::after{
    transition: opacity 125ms ease-in-out;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    border-radius: 0;
  }
  &:hover::after{
    opacity: .1;
  }
`
const DivPicture = styled.div`
`
const ImageInGame = styled.img`
  transition: opacity 125ms ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
`
const ContentGame = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 1.4;
  }
`
const NewEpic = styled.div`
  margin-top: 5px;
`
const EpicFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -5px;

  span {
    margin-top: 5px;
  }
`
const SpanEpic = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 1600px){
    font-size: 11px;
    letter-spacing: 1px;
  }
`
const ButtonEpic = styled.div`
  display: inline-block;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${THEMES.white41};
  color: ${THEMES.white245};
  padding: 5px 10px;
  position: relative;
  border-radius: 4px;
`
const ColorContent = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${THEMES.white245};
  display: block;
`
const NameGame = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const PriceGame = styled.div`
  margin-top: 10px;
`
const PriceMargin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SalePrice = styled.div`
  display: flex;
`
const SpanSale = styled.span`
  transition: all 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 1600px){
    font-size: 11px;
    letter-spacing: 1px;
  }
`
const PercentSale = styled.div`
  display: inline-block;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${THEMES.blue116};
  color: ${THEMES.white245};
  padding: 5px 10px;
  position: relative;
  border-radius: 4px;
`
const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  &.ml-10{
    margin-left: 10px;
  }
`
const SpanNewPrice = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const SpanOldPrice = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white06};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const DisplayOld = styled.div`
  text-decoration: line-through;
`
const TwoPrice = styled.div`
  display: flex;

  &.ml-10{
    margin-left: 10px;
  }
`
const ButtonPlusExport = () => {
  return (
    <ButtonPlus>
      <CirclePlus>
        <SpinnerPlus></SpinnerPlus>
      </CirclePlus>
    </ButtonPlus>
  )
}

const DesCard = ({desSale, desOldPrice, desNewPrice}) => {
  return (
    <PriceGame>
      <PriceMargin>
        {desSale && <SalePrice>
          <SpanSale>
            <PercentSale>{desSale}</PercentSale>
          </SpanSale>
        </SalePrice>}
        <Price className={desSale ? "ml-10" : ""}>
          <TwoPrice>
            <SpanOldPrice>
              <DisplayOld>{desOldPrice}</DisplayOld>
            </SpanOldPrice>
          </TwoPrice>
          <TwoPrice className={desOldPrice ? "ml-10" : ""}>
            <SpanNewPrice>{desNewPrice}</SpanNewPrice>
          </TwoPrice>
        </Price>
      </PriceMargin>
    </PriceGame>
  )
}

const CardGame = ({ name, image, newEpic, sale, oldPrice, newPrice }) => {
  return (
    <div>
      <div>
        <CardPosition>
          <Card>
            <ContentCard>
              <InCard>
                <ImageGame>
                  <BgImage>
                    <DivPicture>
                      <ImageInGame src={image} />
                    </DivPicture>
                  </BgImage>
                </ImageGame>
                <ContentGame>
                  <ColorContent>
                    <NameGame>{name}</NameGame>
                  </ColorContent>
                  {newEpic && <NewEpic>
                    <EpicFlex>
                      <SpanEpic>
                        <ButtonEpic>
                          <span>NEW TO EPIC</span>
                        </ButtonEpic>
                      </SpanEpic>
                    </EpicFlex>
                  </NewEpic>}
                  <DesCard desSale={sale} desOldPrice={oldPrice} desNewPrice={newPrice}/>
                </ContentGame>
              </InCard>
            </ContentCard>
          </Card>
          <OverPlus>
            <div>
              <ButtonPlus>
                <CirclePlus>
                  <SpinnerPlus></SpinnerPlus>
                </CirclePlus>
              </ButtonPlus>
            </div>
          </OverPlus>
        </CardPosition>
      </div>
    </div>
  )
}
const TopContent = ({ title, prev, next }) => {
  return (
    <>
      <TopLeft>
        <Link>
          <Title>
            {title}
            <SvgSpan>
              <Arrow />
            </SvgSpan>
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

function HorizontalView({category, prevButton, nextButton}) {
  SwiperCore.use([Navigation]);
  return (
    <div>
      <div>
        <Content>
          <Top>
            <TopContent title={category} prev={prevButton} next={nextButton}/>
          </Top>
          <Body>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              slidesPerGroup={6}
              loop={true}
              navigation={{
                nextEl: `.${prevButton}`,
                prevEl: `.${nextButton}`,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <CardGame image={game1} name="Salt and Sacrifice" sale="-29%" oldPrice="₫1,799,000" newPrice="₫1,277,290" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game2} name="Salt and Sacrifice" newEpic sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game3} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game4} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game5} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game6} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game7} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game8} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game9} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game10} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game11} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game12} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game13} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game15} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game16} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game17} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game18} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game19} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game20} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game21} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game22} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game23} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game24} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game25} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game26} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game27} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game29} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game30} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game31} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game32} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game33} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game34} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game35} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game36} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game37} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
              <SwiperSlide>
                <CardGame image={game38} name="Salt and Sacrifice" sale="-30%" oldPrice="₫186,000" newPrice="₫130,200" />
              </SwiperSlide>
            </Swiper>
          </Body>
        </Content>
      </div>
    </div>
  )
}

export default HorizontalView
export {ButtonPlusExport, CardGame}