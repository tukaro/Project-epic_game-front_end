import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import {TitleWishlist, ReceiveEmail, SortBy, OnWishlist} from './';

const Section = styled.section`
  margin-bottom: 60px;
  height: 100%;

  @media (min-width: 768px){
    margin-bottom: 71px;
  }
  @media (min-width: 1280px){
    margin-bottom: 80px;
  }

  &:last-child{
    margin-bottom: 0;
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
const FlexWidth = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`
const ContainerWishlist = () => {
  return (
    <Section>
      <FlexWidth>
        <TitleWishlist />
        <ReceiveEmail />
        <SortBy />
        <OnWishlist />
      </FlexWidth>
    </Section>
  )
}

export default ContainerWishlist