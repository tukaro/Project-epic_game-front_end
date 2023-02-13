import React from 'react'
import {THEMES} from '../../../Theme/ColorTheme.js'
import styled from 'styled-components'
import {ButtonLink} from './FreeGame.js'
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
import {ButtonPlusExport} from './HorizontalView.js'
const GridUl = styled.ul`
  list-style: none outside none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  @media (min-width: 768px){
    margin: 0 -8px;
  }
  @media (min-width: 1024px){
    margin: 0 -16px;
  }
`

const ElementGrid = styled.li`
  width: 100%;
  padding: 0 8px;

  @media (min-width: 1024px){
    padding: 0 16px;
  }
  &:not(:last-child){
    border-right: 1px solid ${THEMES.white41};
  }
`
const FlexGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const TopGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  min-height: 30px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 10px;
  }
`
const TitleGrid = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.5px;
  }
`
const ListIn = styled.ul`
  list-style: none outside none;
  margin: 0;
  padding: 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const LiCardGame  = styled.li`
  width: 100%;
`
const WidthPlus = styled.div`
  width: 100%;
  opacity: 0;
  transition: opacity 125ms ease-in-out;
`
const PaddingCard = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  padding: 15px 30px;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 10px 10px;
  }
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
  @media (min-width: 1440px) {
    padding: 10px 20px;
  }
  @media (min-width: 1600px) {
    padding: 16px 32px;
  }

  &::before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    display: block;
    background-color: ${THEMES.white41};
    opacity: 0;
    border-radius: 16px;
    pointer-events: none;
    transition: opacity 125ms ease-in-out;
  }

  &:hover::before{
    opacity: 1;
  }
  &:hover{
    ${WidthPlus}{
      opacity: 1;
    }
  }
`
const LinkImage = styled.a`
  flex-grow: 1;
  display: block;
`
const InCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ImageCard = styled.div`
  position: relative;
  margin-right: 15px;

  @media (min-width: 1600px){
    margin-right: 32px;
  }
`
const BgImage = styled.div`
  width: 48px;
  height: 64px;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(to bottom, ${THEMES.black43}, ${THEMES.black32});

  @media (min-width: 1440px){
    width: 60px;
    height: 80px;
  }
  @media (min-width: 1600px){
    width: 96px;
    height: 129px;
  }
`
const PositionImage = styled.div`
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
`
const PictureGame = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`
const ImageGame = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: opacity 125ms ease-in-out 0s;
  opacity: 1;
`
const BtnPlus = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const DivNone = styled.div``

const DesCard = styled.div`
  width: 100%;
`
const SpanName = styled.span`
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
const GridName = styled.div`
  display: grid;
`
const NameInGame = styled.div`
  overflow: hidden;
  word-break: break-word;
`
const SalePrice = styled.div`
  margin-top: 10px;
`
const FlexPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SaleLeft = styled.div`
  display: flex;
`
const SaleSpan = styled.span`
  color: ${THEMES.white245};
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 125ms ease-in-out;

  @media (min-width: 1600px) {
    font-size: 11px;
    letter-spacing: 1px;
  }
`
const BgSale = styled.div`
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
const GridPrice = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`
const GamePrice = styled.div`
  display: flex;
  margin-left: 10px;
`
const TextOldPrice = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white06};
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0;
  @media (min-width: 1600px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const OldPrice = styled.div`
  text-decoration: line-through;
`
const NewPrice = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0;

  @media (min-width: 1600px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
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
const CardGame = ({image, name, sale, oldPrice, newPrice, newEpic}) => {
  return (
    <LiCardGame>
      <PaddingCard>
        <LinkImage>
          <InCard>
            <ImageCard>
              <BgImage>
                <PositionImage>
                  <PictureGame>
                    <ImageGame src={image} />
                  </PictureGame>
                </PositionImage>
              </BgImage>
              <BtnPlus>
                <WidthPlus>
                  <DivNone>
                      <ButtonPlusExport/>
                  </DivNone>
                </WidthPlus>
              </BtnPlus>
            </ImageCard>
            <DesCard>
              <SpanName>
                <GridName>
                  <NameInGame>
                    {name}
                  </NameInGame>
                </GridName>
              </SpanName>
              {newEpic && <NewEpic>
                <EpicFlex>
                  <SpanEpic>
                    <ButtonEpic>
                      <span>NEW TO EPIC</span>
                    </ButtonEpic>
                  </SpanEpic>
                </EpicFlex>
              </NewEpic>}
              <SalePrice>
                <FlexPrice>
                  {sale && <SaleLeft>
                    <SaleSpan>
                      <BgSale>{sale}</BgSale>
                    </SaleSpan>
                  </SaleLeft>}
                  <GridPrice>
                    {oldPrice && <GamePrice>
                      <TextOldPrice>
                        <OldPrice>{oldPrice}</OldPrice>
                      </TextOldPrice>
                    </GamePrice>}
                    <GamePrice>
                      <NewPrice>
                        {newPrice}
                      </NewPrice>
                    </GamePrice>
                  </GridPrice>
                </FlexPrice>
              </SalePrice>
            </DesCard>
          </InCard>
        </LinkImage>
      </PaddingCard>
    </LiCardGame>
  )
}
const ThreeGrid = ({title, img}) => {
  return (
    <ElementGrid>
      <FlexGrid>
        <TopGrid>
          <TitleGrid>
            <span>{title}</span>
          </TitleGrid>
          <ButtonLink>View More</ButtonLink>
        </TopGrid>
        <ListIn>
          <CardGame 
            name="Mari and Bayu - The Road Home" 
            image={img[0]} 
            sale="-10%" 
            oldPrice="₫303,680" 
            newPrice="₫273,312"
          />
          <CardGame 
            name="Endling - Extinction is Forever" 
            image={img[1]} 
            sale="-88%" 
            oldPrice="₫165,000" 
            newPrice="₫19,800"
          />
          <CardGame 
            name="Dead Age" 
            image={img[2]} 
            sale="-25%"
            newEpic
            oldPrice="₫450,000" 
            newPrice="₫337,500"
          />
          <CardGame 
            name="Hardspace: Shipbreaker" 
            image={img[3]} 
            sale="-50%" 
            oldPrice="₫455,500" 
            newPrice="₫227,750"
          />
          <CardGame 
            name="Cook Serve Delicious 2" 
            image={img[4]} 
            sale="-50%" 
            oldPrice="₫1,000,000" 
            newPrice="₫500,000"
          />
        </ListIn>
      </FlexGrid>
    </ElementGrid>
  )
}

function GridGame() {
  return (
    <div>
      <GridUl>
        <ThreeGrid title="New Releases" img={[game1, game2, game3, game4, game5]}/>
        <ThreeGrid title="Top Sellers" img={[game6, game7, game8, game9, game10]}/>
        <ThreeGrid title="Coming Soon" img={[game11, game12, game13, game15, game16]}/>
      </GridUl>
    </div>
  )
}

export default GridGame