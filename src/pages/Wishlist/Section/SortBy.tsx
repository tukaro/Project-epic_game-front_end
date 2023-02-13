import React, { useState } from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import {Arrow} from '../../../svg'

const FlexMargin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 8px;
`
const FlexGrow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`
const SpanSort = styled.span`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  color: ${THEMES.white06};
  display: block;
  padding: 5px 0;
  margin-bottom: 5px;
`
const WidthDrop = styled.div`
  width: 160px;
`
const Position = styled.div`
  width: 100%;
  position: relative;
`
const ButtonDrop = styled.button`
  border: solid 1px transparent;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  color: currentColor;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 5px;
  opacity: 0.75;
  width: auto;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: 1px solid currentColor;
    opacity: 0;
  }

  &:hover {
    opacity: 1;
}
`
const MarginSpan = styled.span`
  margin-right: 5px;
  opacity: 0.6;
`
const SpanTitleDrop = styled.span`
  margin-right: 5px;
`
const ArrowSpan = styled.span`
  display: block;
  line-height: 0;
  color: currentColor;
  width: 8px;
  height: 10px;
  transform: rotateZ(90deg);
  transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);

  svg {
    width: 100%;
    height: 100%;
  }
`
const ContentDrop = styled.div`
  color: ${THEMES.white245};
  background-color: ${THEMES.black32};
  border-radius: 3px;
  margin-top: 5px;
  padding: 10px 0;
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 35px rgb(0 0 0 / 50%);
  width: max-content;
`
const SpanContent = styled.span`
  position: relative;
  display: inline-block;

  &::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    opacity: 0;
  }
`
const ButtonContent = styled.button`
  transition: opacity 125ms ease-in-out;
  width: 100%;
  color: currentColor;
  display: block;
  opacity: 0.5;
  padding: 8px 20px;
  position: relative;
  font-size: 14px;
  text-align: left;

  &.active{
    ${SpanContent}::after {
      opacity: 1;
    }
    opacity: 1;
  }

  &:hover{
    ${SpanContent}::after {
      opacity: 1;
    }
    opacity: 1;
  }
`

const SortBy = () => {
  const [show, setShow] = useState(false)
  const [dropdownValue, setDropdownValue] = useState("On Sale");

  const handleShow = () => {
    setShow(show => !show);
  }

  const handleSetDropContent = (value) => {
    setDropdownValue(value)
    setShow(show => !show);
  }

  return (
    <FlexMargin>
      <FlexGrow>
        <SpanSort>
          <span>
            Sort by:
          </span>
        </SpanSort>
        <WidthDrop>
          <Position>
            <ButtonDrop onClick={handleShow}>
              <MarginSpan></MarginSpan>
              <SpanTitleDrop>{dropdownValue}</SpanTitleDrop>
              <ArrowSpan  
                style={{
                  transition: "transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
                  transform: `rotateZ(${show ? 90 : -90}deg)`,
                }}
              >
                <Arrow />
              </ArrowSpan>
            </ButtonDrop>
            {show && <ContentDrop>
              <ButtonContent onClick={() => handleSetDropContent("On Sale")} className={dropdownValue === "On Sale" ? 'active' : ''} > 
                <SpanContent>On Sale</SpanContent>
              </ButtonContent>
              <ButtonContent onClick={() => handleSetDropContent("Recently Added")}  className={dropdownValue === "Recently Added" ? 'active' : ''}>
                <SpanContent>Recently Added</SpanContent>
              </ButtonContent>
              <ButtonContent onClick={() => handleSetDropContent("Alphabetical")}  className={dropdownValue === "Alphabetical" ? 'active' : ''}>
                <SpanContent>Alphabetical</SpanContent>
              </ButtonContent>
              <ButtonContent onClick={() => handleSetDropContent("Price: Low to High")}  className={dropdownValue === "Price: Low to High" ? 'active' : ''}>
                <SpanContent>Price: Low to High</SpanContent>
              </ButtonContent>
              <ButtonContent onClick={() => handleSetDropContent("Price: High to Low")}  className={dropdownValue === "Price: High to Low" ? 'active' : ''}>
                <SpanContent>Price: High to Low</SpanContent>
              </ButtonContent>
            </ContentDrop>}
          </Position>
        </WidthDrop>
      </FlexGrow>
    </FlexMargin>
  )
}

export default SortBy