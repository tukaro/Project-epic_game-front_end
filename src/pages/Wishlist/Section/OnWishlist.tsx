import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import {Empty} from '../../../svg'

const Margin = styled.div`
  margin-top: 30px;
`
const PaddingEmpty = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const WidthEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 85%;
  max-height: 100%;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 70%;
  }
  @media (min-width: 1024px) {
    max-width: 65%;
  }
`
const SpanSvg = styled.span`
  display: block;
  line-height: 0;
  width: 60px;
  height: 60px;
  margin-bottom: 40px;

  svg{
    width: 100%;
    height: 100%;
  }
`
const MarginWidth = styled.div`
  margin: 0;
  width: 100%;
`
const TitleEmpty = styled.div`
  color: ${THEMES.white245};
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.3px;

  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 45px;
    letter-spacing: -0.5px;
  }
  @media (min-width: 1600px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -1px;
  }
`
const PaddingLink = styled.div`
  margin: 20px 0 0;
  padding: 0;
`
const SpanShop = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;

  @media(min-width: 1024px){
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media(min-width: 1440px){
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media(min-width: 1600px){
    font-size: 22px;
    line-height: 25px;
    letter-spacing: -0.4px;
  }
`
const LinkShop = styled.a`
  border-bottom: 1px solid ${THEMES.white01};
  color: ${THEMES.white06};
`
const OnWishlist = () => {
  return (
    <Margin>
      <PaddingEmpty>
        <WidthEmpty>
          <SpanSvg><Empty /> </SpanSvg>
          <MarginWidth>
            <TitleEmpty>
              <span>You haven't added anything to your wishlist yet.</span>
            </TitleEmpty>
          </MarginWidth>
          <PaddingLink>
            <SpanShop>
              <LinkShop>Shop for Games & Apps</LinkShop>
            </SpanShop>
          </PaddingLink>
        </WidthEmpty>
      </PaddingEmpty>
    </Margin>
  )
}

export default OnWishlist