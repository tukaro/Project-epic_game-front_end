import React from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import {SwitchButton} from '../../../components'
import {SeeAll} from '../../../svg'

const DivNone = styled.div``
const MarginBottom = styled.div`
  margin-bottom: 20px;
`
const FlexWidth = styled.div`
  display: flex;
  width: 100%;
`
const ButtonPadding = styled.div`
  padding-right: 10px;
  display: flex;
  height: fit-content;
`
const Loading = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-top: 8px;
  align-items: center;
  min-height: 20px;
`
const Notification = styled.div`
  display: inline-flex;
  align-items: center;
`
const SpanReceive = styled.span`
  transition: color 125ms ease-in-out;
  font-size: 14px;
  color: ${THEMES.white245};
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media(min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const Manage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  @media (min-width: 576px) {
    margin-left: 30px;
    margin-top: 0;
  }
`
const LinkManage = styled.a`
  border-bottom: 1px solid ${THEMES.white01};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`
const SpanSvg = styled.span`
  line-height: 0;
  width: 12px;
  height: 12px;
  display: inline-block;
  position: relative;
  bottom: -2px;
  color: ${THEMES.white245};
  margin-left: 0.25em;

  svg {
    width: 100%;
    height: 100%;
  }
`
const ReceiveEmail = () => {
  return (
    <DivNone>
      <MarginBottom>
        <FlexWidth>
          <ButtonPadding>
            <SwitchButton />
          </ButtonPadding>
          <Notification>
            <SpanReceive>
              <span>
                Receive email notifications about my wishlist.
              </span>
            </SpanReceive>
            <Manage>
              <LinkManage>
                <SpanReceive>
                  <span>Manage all your communication preferences</span>
                </SpanReceive>
                <SpanSvg><SeeAll /></SpanSvg>
              </LinkManage>
            </Manage>
          </Notification>
        </FlexWidth>
        <Loading></Loading>
      </MarginBottom>
    </DivNone>
  )
}

export default ReceiveEmail