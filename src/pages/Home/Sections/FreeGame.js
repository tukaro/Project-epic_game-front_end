import React from "react";
import {THEMES} from '../../../Theme/ColorTheme.js'
import styled from "styled-components";
import { Presents } from "../../../svg";
import {
  bigPoster1,
  bigPoster2,
  bigPoster3,
  bigPoster4,
} from "../../Home/assets";

const BgFree = styled.div`
  overflow: hidden;
  background: ${THEMES.white41};
  border-radius: 4px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 1024px){
    padding-left: 40px;
    padding-right: 40px
  }
`;
const TopHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  margin-bottom: 25px;
`;
const TitleTop = styled.h2`
  display: flex;
  align-items: center;
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 1.4px;
`;
const SvgSpan = styled.span`
  display: block;
  line-height: 0;
  width: 27px;
  height: 27px;
  margin-right: 18px;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-right: 14px;
  }
`;
const ButtonLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  color: ${THEMES.white245};
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  padding: 0 20px;
  background-color: transparent;
  border: 1px solid ${THEMES.white06};
  height: 34px;
  width: auto;
  min-height: auto;

  @media (min-width: 1600px) {
    font-size: 14px;
    letter-spacing: 1px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
    transition: border 125ms ease-in-out;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    transition: opacity 200ms ease;
    background-color: ${THEMES.white255};
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.16;
    overflow: hidden;
  }
`;
const BodyCard = styled.section`
  display: flex;
  overflow-x: visible;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`;
const FlexBody = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  display: flex;
  align-content: stretch;
  align-items: stretch;
  width: 100%;
`;
const FlexCard = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 100%;
  margin-left: 1rem;

  &:first-child {
    margin-left: 0;
  }
`;
const DivNone = styled.div``;
const LinkCard = styled.a``;
const PaddingCard = styled.div`
  display: block;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  background-color: transparent;
  font-size: 1rem;
  line-height: normal;
`;
const ColumnCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const TopCard = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 4px;
`;
const BgImage = styled.div`
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
  background: linear-gradient(to bottom, ${THEMES.black43}, ${THEMES.black32});
  color: ${THEMES.white06};
  overflow: hidden;
  border-radius: 4px;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    border-radius: 0;
    transition: opacity 125ms ease-in-out;
  }
  &:hover::after {
    opacity: 0.1;
  }
`;
const ImageCard = styled.img`
  position: absolute;
  height: 100%;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 125ms ease-in-out 450ms;
`;
const ButtonFree = styled.div`
  height: 25px;
`;
const PositionBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const TextBtn = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 1.33333;
  font-weight: 700;
  text-transform: uppercase;
  color: ${THEMES.white255};
  display: block;
  padding: 5px;
  text-align: center;
  width: 100%;

  &.blue{
    background-color: ${THEMES.blue120};
  }
  &.black{
    background-color: ${THEMES.black0};
  }

`;
const Bottom = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;

  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;
const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${THEMES.white245};
  display: block;
`;
const DivText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SubTitle = styled.span`
  display: block;
  font-weight: 400;
  color: ${THEMES.white06};
  margin-top: 5px;
`;
const Card = ({image, name, soon, date}) => {
  return (
    <FlexCard>
      <DivNone>
        <div>
          <LinkCard>
            <PaddingCard>
              <ColumnCard>
                <TopCard>
                  <BgImage>
                    <ImageCard src={image} />
                  </BgImage>
                  <ButtonFree>
                    <PositionBtn>
                      <TextBtn className={(soon === 'Free now') ? 'blue' : 'black'}>
                        <span>{soon}</span>
                      </TextBtn>
                    </PositionBtn>
                  </ButtonFree>
                </TopCard>
                <div style={{ width: "100%", height: "1rem" }}></div>
                <Bottom>
                  <Title>
                    <DivText>
                      {name}
                    </DivText>
                  </Title>
                  <SubTitle>
                    <DivText>
                      <span>{date}</span>
                    </DivText>
                  </SubTitle>
                </Bottom>
              </ColumnCard>
            </PaddingCard>
          </LinkCard>
        </div>
      </DivNone>
    </FlexCard>
  );
};
function FreeGame() {
  return (
    <>
      <BgFree>
        <TopHeader>
          <TitleTop>
            <SvgSpan>
              <Presents />
            </SvgSpan>
            Free Games
          </TitleTop>
          <ButtonLink>View More</ButtonLink>
        </TopHeader>
        <BodyCard>
          <FlexBody>
            <Card image={bigPoster1} soon="Free now" name="Idle Champions of the Forgotten Realms" date="Free Now - Jul 21 at 10:00 PM"/>
            <Card image={bigPoster2} soon="Free now" name="Wonder Boy The Dragons Trap" date="Free Now - Jul 21 at 10:00 PM"/>
            <Card image={bigPoster3} soon="Coming Soon" name="Shop Titans" date="Free Jul 21 - Jul 28"/>
            <Card image={bigPoster4} soon="Coming Soon" name="Tannenberg" date="Free Jul 21 - Jul 28"/>
          </FlexBody>
        </BodyCard>
      </BgFree>
    </>
  );
}

export default FreeGame;
export {ButtonLink}