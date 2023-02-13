import React from "react";
import {THEMES} from '../../../Theme/ColorTheme.js'
import styled from "styled-components";
import {
  posterGame1,
  posterGame2
} from "../../Home/assets";

const FlexTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
`;
const WidthTwo = styled.div`
  width: calc(100% / 2 - 16px);
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 32px;
  }
`;
const HeightTwo = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const PlusPosition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity 125ms ease-in-out;
  opacity: 0;
  z-index: 1;
`;
const ButtonPlus = styled.div`
  position: relative;
  color: ${THEMES.white245};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CirclePlus = styled.div`
  align-items: center;
  background-color: ${THEMES.black18};
  border-radius: 50%;
  border: 2px solid ${THEMES.white245};
  box-shadow: none;
  display: flex;
  flex: 0 0 auto;
  height: 20px;
  width: 20px;
  justify-content: center;
  position: relative;
`;
const SpinnerPlus = styled.div`
  height: 12px;
  width: 12px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background: ${THEMES.white245};
    margin: auto;
  }

  &::before {
    height: 10px;
    width: 2px;
  }
  &::after {
    height: 2px;
    width: 10px;
  }
`;
const ImageTwo = styled.div`
  width: 100%;

  &:hover {
    ${PlusPosition} {
      opacity: 1;
    }
  }
`;
const BgImage = styled.div`
  height: 100%;
  position: relative;
  border-radius: 16px;
  background: ${THEMES.black18};
`;
const LinkCard = styled.a`
  text-decoration: none;

  &::after {
    content: "";
    transition: opacity 125ms ease-in-out;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${THEMES.white41};
    pointer-events: none;
    opacity: 0;
  }
  &:hover::after {
    opacity: 1;
  }
`;
const DivNone = styled.div``;
const ImagePadding = styled.div`
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);
`;
const FlexImage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`;
const ImageGame = styled.img`
  width: 100%;
  border-radius: 16px;
`;
const DesTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;
  padding: 0 16px;
  @media (min-width: 1600px) {
    padding: 0 30px;
    margin-top: 30px;
  }
  @media (min-width: 1440px) {
    padding: 0 20px;
  }
`;
const NameTwo = styled.div`
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 1600px) {
    margin-bottom: 15px;
  }
`;
const LinkName = styled.a`
  text-decoration: none;
`;
const TextName = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;
const TextGrid = styled.div`
  display: grid;
`;
const TextNameTwo = styled.div`
  overflow: hidden;
  word-break: break-word;
  line-clamp: 2;
`;
const Description = styled.div`
  flex: 1;
`;
const TextDescription = styled.span`
  color: ${THEMES.white06};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`;
const TextBreak = styled.div`
  overflow: hidden;
  word-wrap: break-word;
  line-clamp: 4;
`;
const PriceTwo = styled.div`
  margin-top: 20px;
  @media (min-width: 1600px) {
    margin-top: 25px;
  }
`;
const FlexPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Pr2 = styled.div`
  padding-right: 20px;
`;
const FlexEnd = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
const Flex = styled.div`
  display: flex;
`;
const SpanPrice = styled.span`
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
`;
const CardGame = ({image, name, description, price }) => {
  return (
    <>
      <WidthTwo>
        <HeightTwo>
          <ImageTwo>
            <BgImage>
              <LinkCard>
                <DivNone>
                  <ImagePadding>
                    <FlexImage>
                      <ImageGame src={image} />
                    </FlexImage>
                  </ImagePadding>
                </DivNone>
              </LinkCard>
            </BgImage>
            <PlusPosition>
              <ButtonPlus>
                <CirclePlus>
                  <SpinnerPlus></SpinnerPlus>
                </CirclePlus>
              </ButtonPlus>
            </PlusPosition>
          </ImageTwo>
          <DesTwo>
            <NameTwo>
              <LinkName>
                <TextName>
                  <TextGrid>
                    <TextNameTwo>{name}</TextNameTwo>
                  </TextGrid>
                </TextName>
              </LinkName>
            </NameTwo>
            <Description>
              <TextDescription>
                <TextGrid>
                  <TextBreak>
                    {description}
                  </TextBreak>
                </TextGrid>
              </TextDescription>
            </Description>
            {price && <PriceTwo>
              <FlexPrice>
                <Pr2>
                  <FlexPrice>
                    <FlexEnd>
                      <Flex>
                        <SpanPrice>{price}</SpanPrice>
                      </Flex>
                    </FlexEnd>
                  </FlexPrice>
                </Pr2>
              </FlexPrice>
            </PriceTwo>}
          </DesTwo>
        </HeightTwo>
      </WidthTwo>
    </>
  );
};

function TwoGame() {
  return (
    <div>
      <FlexTwo>
        <CardGame 
          image={posterGame1} 
          name="Saints Row - Coming August 23" 
          description="Pre-Purchase now and get the Expansion Pass, plus The Idols Anarchy Pack, featuring a selection of stolen neon equipment." 
          price="₫839,000"
        />
        <CardGame 
          image={posterGame2} 
          name="Ravenlok - Coming Soon" 
          description="Experience the fairytale reimagining of a kingdom troubled by an evil queen and a young girl’s destiny to fulfill a dangerous prophecy." 
        />
      </FlexTwo>
    </div>
  );
}

export default TwoGame;
