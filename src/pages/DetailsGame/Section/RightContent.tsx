import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import {Window, MacOS} from '../../../svg'

const Right = styled.div`
  flex-shrink: 0;
  flex-grow: 0;

  @media (min-width: 768px){
    width: 256px;
    margin-left: 32px;
  }
  @media (min-width: 1024px){
    width: 260px;
    margin-left: 20px;
  }
  @media (min-width: 1280px){
    width: 320px;
    margin-left: 64px;
  }
`
const Sticky = styled.div`
  @media (min-width: 768px) {
    position: sticky;
    top: 100px;
  }
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const DivNone = styled.div`
  &:not(:first-child){
    margin-top: 10px;
  }
`
const Border = styled.div`
  border-radius: 4px;
  overflow: hidden;
`
const BorderPadding = styled.div`
  border-radius: 4px;
  padding: 20px;
`
const WidthImage = styled.div`
  padding-bottom: calc(9 / 16 * 100%);
  position: relative;
`
const FlexImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`
const WidthHeight = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img{
    width: 100%;
    object-fit: contain;
  }
`
const Picture = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  opacity: 1;
  transition: opacity 125ms ease-in-out 450ms;
`
const FlexMargin = styled.div`
  display: flex;
  flex-grow: row wrap;
  margin: -5px -2.5px;
`
const AlignFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5px 2.5px;
`
const FontSpan = styled.span`
  color: ${THEMES.white245};
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 125ms ease-in-out;

  @media (min-width: 1600px){
    font-size: 11px;
    letter-spacing: 1px;
  }
`
const BgBase = styled.div`
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
const FlexDirection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const FlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const SpanPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`
const Flex = styled.div`
  display: flex;
`
const FontPrice = styled.span`
  color: ${THEMES.white245};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 125ms ease-in-out;

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const ButtonPre = styled.button`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  position: relative;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 15px;
  padding: 0 20px;
  height: 50px;
  display: flex;
  width: 100%;
  min-width: auto;;
  background-color: ${THEMES.blue116};
  color: ${THEMES.white245};

  @media (min-width: 1600px) {
    font-size: 14px;
    letter-spacing: 1px;
  }

  &::after{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: ${THEMES.white255};
    opacity: 0;
    transition: opacity 200ms ease 0s;
  }

  &::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
    transition: border 125ms ease-in-out 0s;
  }

  &:hover::after{
    opacity: 0.16;
    overflow: hidden;
  }
`
const SpanWidth = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 12em;
`
const ButtonCart = styled.button`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  position: relative;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  padding: 0px 20px;
  height: 50px;
  display: flex;
  width: 100%;
  min-width: auto;
  background-color: transparent;
  color: ${THEMES.white245};
  border: 1px solid ${THEMES.white06};

  &::after{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: ${THEMES.white255};
    opacity: 0;
    transition: opacity 200ms ease 0s;
  }

  &::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
    transition: border 125ms ease-in-out 0s;
  }

  &:hover::after{
    opacity: 0.16;
    overflow: hidden;
  }

  @media (min-width: 1600px){
    font-size: 14px;
    letter-spacing: 1px;
  }
`
const SpanCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 12em;
  opacity: 1;
  transition: opacity 125ms ease-in-out 0s;
`
const ButtonWishList = styled.button`
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: 500;
  position: relative;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  padding: 0px 20px;
  height: 34px;
  display: flex;
  width: 100%;
  min-width: auto;
  background-color: transparent;
  color: ${THEMES.white245};
  border: 1px solid ${THEMES.white06};

  
  &::after{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background-color: ${THEMES.white255};
    opacity: 0;
    transition: opacity 200ms ease 0s;
  }

  &::before{
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
    transition: border 125ms ease-in-out 0s;
  }

  &:hover::after{
    opacity: 0.16;
    overflow: hidden;
  }

  @media (min-width: 1600px){
    font-size: 14px;
    letter-spacing: 1px;
  }
`
const SpanInButton = styled.span`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const CirclePlus = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 flex;
  border-radius: 50%;
  background-color: ${THEMES.black18};
  border: 2px solid ${THEMES.white245};
  box-shadow: none;
  margin-right: 6px;
`
const Plus = styled.div`
  height: 12px;
  width: 12px;

  &::after, &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    margin: auto;
    background: ${THEMES.white245};
  }

  &::after{
    width: 8px;
    height: 2px;
  }

  &::before{
    width: 2px;
    height: 8px;
  }
`
const SpanWishList = styled.span`
  color: ${THEMES.white245};
  font-size: 9px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 500;

  @media (min-width: 1600px){
    font-size: 11px;
    letter-spacing: 1px;
  }
`
const WidthDirection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const BorderBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid ${THEMES.white41};
`
const FlexWidth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const SpanLeft = styled.span`
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
const TextRight = styled.div`
  text-align: right;
  margin-left: 5px;
`
const SpanText = styled.span`
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
const UlPlatform = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
`
const LiPlatform = styled.li`
  &:not(:last-child){
    margin-right: 1em;
  }
`
const SpanPlatform = styled.span`
  display: block;
  line-height: 0;
  width: 20px;
  height: 20px;

  svg{
    width: 100%;
    height: 100%;
  }
`
const RightContent = () => {
  return (
    <Right>
      <Sticky>
        <FlexColumn>
          {/* Picture Logo */}
          <DivNone>
            <Border>
              <BorderPadding>
                <WidthImage>
                  <FlexImage>
                    <WidthHeight>
                      <Picture>
                        <ImageLogo src={"https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-ic1-400x400-783ee335e810.png?h=270&resize=1&w=480"} />
                      </Picture>
                    </WidthHeight>
                  </FlexImage>
                </WidthImage>
              </BorderPadding>
            </Border>
          </DivNone>
          {/* Base Game */}
          <DivNone>
            <FlexMargin>
              <AlignFlex>
                <FontSpan>
                  <BgBase>
                    <FlexDirection>
                      <span>Base Game</span>
                    </FlexDirection>
                  </BgBase>
                </FontSpan>
              </AlignFlex>
            </FlexMargin>
          </DivNone>
          {/* Price */}
          <DivNone>
            <FlexStart>
              <FlexDirection>
                <SpanPrice>
                  <Flex>
                    <FontPrice>₫1,139,000</FontPrice>
                  </Flex>
                </SpanPrice>
              </FlexDirection>
            </FlexStart>
          </DivNone>
          <DivNone>
            <div>
              <ButtonPre>
                <SpanWidth>
                  <span>Pre-Purchase</span>
                </SpanWidth>
              </ButtonPre>
            </div>
          </DivNone>
          <DivNone>
            <div>
              <ButtonCart>
                <SpanCart>
                  <span>Add To Cart</span>
                </SpanCart>
              </ButtonCart>
            </div>
          </DivNone>
          <DivNone>
            <ButtonWishList>
              <SpanInButton>
                <CirclePlus>
                  <Plus />
                </CirclePlus>
                <SpanWishList>
                  <span>Add to Wishlist</span>
                </SpanWishList>
              </SpanInButton>
            </ButtonWishList>
          </DivNone>
          <DivNone>
            <WidthDirection>
              <BorderBottom>
                <FlexWidth>
                  <SpanLeft>Developer</SpanLeft>
                  <TextRight>
                    <SpanText>Insomniac Games, Nixxes Software</SpanText>
                  </TextRight>
                </FlexWidth>
              </BorderBottom>
              <BorderBottom>
                <FlexWidth>
                  <SpanLeft>Publisher</SpanLeft>
                  <TextRight>
                    <SpanText>PlayStation</SpanText>
                  </TextRight>
                </FlexWidth>
              </BorderBottom>
              <BorderBottom>
                <FlexWidth>
                  <SpanLeft>Available</SpanLeft>
                  <TextRight>
                    <SpanText>08/12/22</SpanText>
                  </TextRight>
                </FlexWidth>
              </BorderBottom>
              <BorderBottom>
                <FlexWidth>
                  <SpanLeft>Platform</SpanLeft>
                  <TextRight>
                    <SpanText>
                      <UlPlatform>
                        <LiPlatform>
                          <SpanPlatform>
                            <Window />
                          </SpanPlatform>
                        </LiPlatform>
                      </UlPlatform>
                    </SpanText>
                  </TextRight>
                </FlexWidth>
              </BorderBottom>
            </WidthDirection>
          </DivNone>
        </FlexColumn>
      </Sticky>
    </Right>
  )
}

export default RightContent