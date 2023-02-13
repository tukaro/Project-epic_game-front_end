import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'

const Margin = styled.div`
  margin-top: 8px;
  margin-bottom: 40px;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const NameTitle = styled.h1`
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
const TitleWishlist = () => {
  return (
    <Margin>
      <FlexRow>
        <NameTitle>
          Wishlist
        </NameTitle>
      </FlexRow>
    </Margin>
  )
}

export default TitleWishlist