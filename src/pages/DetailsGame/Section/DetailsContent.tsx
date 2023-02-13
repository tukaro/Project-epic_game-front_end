import React from 'react'
import styled from 'styled-components'
import {CarouselContent, RightContent, LeftContent, Ratings} from '../Section'

const Row = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const DetailsContent = () => {
  return (
    <>
      <Row>
        <FlexColumn>
          <FlexRow>
            <LeftContent />
            <RightContent />
          </FlexRow>
        </FlexColumn>
      </Row>
        <Ratings />
    </>
  )
}

export default DetailsContent