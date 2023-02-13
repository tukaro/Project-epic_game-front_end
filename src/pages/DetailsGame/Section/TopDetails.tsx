import React from 'react'
import styled from 'styled-components'
import {THEMES} from '../../../Theme/ColorTheme'

const Margin = styled.div`
  margin-bottom: 15px;

  @media(min-width: 1440px){
    margin-bottom: 20px;
  }
`
const WidthBorder = styled.div`
  width: 100%;
`
const Border = styled.div`
  height: 1px;
  max-height: 1px;
  min-height: 1px;
  background-color: ${THEMES.white41};
`
const TitleGame = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`
const Flex = styled.div`
  flex-grow: 1;
`
const DivNone = styled.div``
const LineHeight = styled.h1`
  line-height: 0;
`
const SpanTitle = styled.span`
  color: ${THEMES.white245};
  font-size: 30px;
  line-height: 45px;
  letter-spacing: 0.3px;

  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 45px;
    letter-spacing: -0.5px;
  }
  @media (min-width: 1660px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -1px;
  }
`
const TopDetails = () => {
  return (
    <Margin>
      <WidthBorder>
        <Border />
      </WidthBorder>
      <TitleGame>
        <Flex>
          <LineHeight>
            <DivNone>
              <SpanTitle>Marvel's Spider-Man Remastered</SpanTitle>
            </DivNone>
          </LineHeight>
        </Flex>
      </TitleGame>
    </Margin>
  )
}

export default TopDetails