import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { THEMES } from '../../../Theme/ColorTheme'
import { Down } from '../../../svg';

const Left = styled.div`
  @media (min-width: 1280px){
    width: calc(100% - 384px);
  }

  @media (min-width: 1024px) and (max-width: 1279px){
    width: 100%;
    min-width: calc(100% - 280px);
  } 
`
const DivNone = styled.div`
  &:not(:first-child){
    margin-top: 20px;
  }
`
const MarginTop = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Description = styled.div`
  flex-basis: 100%;
  margin-bottom: 40px;
`
const SpanDescription = styled.span`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;
  transition: color 125ms ease-in-out 0s;

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
`
const Grid = styled.div`
  display: grid;
`
const WordBreak = styled.div`
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  line-clamp: 6;
`
const Category = styled.div`
  flex-basis: 100%;
  &:not(:empty){
    margin-bottom: 20px;
  }
`
const Stretch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: stretch;
`
const RowTable = styled.div`
  flex: 1 1 calc(33.33333%);
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-left: 1px solid ${THEMES.white41};
`
const MarginTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
const TitleTable = styled.div`
  flex: 0 1 100%;
`
const SpanTitle = styled.span`
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
`
const CategoryUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
`
const CategoryLi = styled.li`
  display: inline;

  &:not(:last-child) {
    margin-right: 0.5em;
  }
  &:not(:last-child)::after {
    content: ',';
    color: ${THEMES.white245};
  }
`
const LinkGenres = styled.a`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 0s ease 0s, border 200ms ease 0s;
  text-decoration: underline;
  border: 1px solid transparent;
  color: ${THEMES.white245};

  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`
const SpanGenres = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${THEMES.white245};
  transition: color 125ms ease-in-out;
  
  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const Overflow = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const LongDescription = styled.div`
  ${props => {
    if (props.toggle) {
      return `
        overflow: hidden;
      `;
    }
    else {
      return `
        max-height: 400px;
        overflow: hidden;
      `
    }
  }}
`
const ColorSpan = styled.div`
  color: ${THEMES.white245};

  img{
    width: 100%;
  }

  strong {
    font-weight: 700
  }
`
const MarginPicture = styled.div`
  margin-bottom: 25px;
  color: ${THEMES.white06};
`
const Picture = styled.div``
const ImageInDescription = styled.img`
  border-radius: 4px;
  opacity: 1;
  transition: opacity 125ms ease-in-out 450ms;
`
const TextBold = styled.h2`
  font-size: inherit;
  margin-bottom: 10px;
`
const UlText = styled.ul`
  margin-bottom: 25px;
  color: ${THEMES.white06};
  margin-left: 6px;
  padding-left: 10px;
  list-style-type: none;
`
const DivButton = styled.div`
  position: relative;
  background-color: ${THEMES.black18};
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 1;
`
const ButtonShow = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  min-width: auto;
  padding: 0 20px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  line-height: 15px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
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
const SpanSvg = styled.span`
  display: block;
  line-height: 0;
  width: 20px;
  height: 20px;
  transition: transform 125ms ease-in-out;
  
  ${props => {
    if (props.toggle) {
      return `
      transform: rotate(180deg);
      `;
    }
    else {
      return `
        transform: rotate(0deg);
      `
    }
  }}

  svg{
    width: 100%;
    height: 100%;
  }
`
const OverlayButton = styled.div`
  ${props => {
    if (props.toggle) {
      return `
        display: none;
      `;
    }
    else {
      return `
        position: absolute;
        background: linear-gradient(rgba(18, 18, 18, 0), rgb(18, 18, 18));
        top: -100px;
        height: 100px;
        width: 100%;
      `
    }
  }}



`
const LeftContent = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((isShow) => !isShow);
  }

  useEffect(() => console.log(show), [show]);

  return (
    <Left>
      <DivNone>Carousel</DivNone>
      <DivNone>
        <MarginTop>
          <Column>
            <Description>
              <SpanDescription>
                <Grid>
                  <WordBreak>In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. </WordBreak>
                </Grid>
              </SpanDescription>
            </Description>
            <Category>
              <Stretch>
                <RowTable>
                  <MarginTable>
                    <TitleTable>
                      <SpanTitle>Genres</SpanTitle>
                    </TitleTable>
                    <TitleTable>
                      <CategoryUl>
                        <CategoryLi>
                          <LinkGenres>
                            <SpanGenres>
                              <span>Action</span>
                            </SpanGenres>
                          </LinkGenres>
                        </CategoryLi>
                        <CategoryLi>
                          <LinkGenres>
                            <SpanGenres>
                              <span>Adventure</span>
                            </SpanGenres>
                          </LinkGenres>
                        </CategoryLi>
                      </CategoryUl>
                    </TitleTable>
                  </MarginTable>
                </RowTable>
                <RowTable>
                  <MarginTable>
                    <TitleTable>
                      <SpanTitle>Features</SpanTitle>
                    </TitleTable>
                    <TitleTable>
                      <CategoryUl>
                        <CategoryLi>
                          <LinkGenres>
                            <SpanGenres>
                              <span>Single Player</span>
                            </SpanGenres>
                          </LinkGenres>
                        </CategoryLi>
                      </CategoryUl>
                    </TitleTable>
                  </MarginTable>
                </RowTable>
              </Stretch>
            </Category>
            <Category>
              <Overflow>
                <LongDescription toggle={show}>
                  <SpanGenres>
                    <ColorSpan>
                      <MarginPicture>
                        <Picture>
                          <ImageInDescription src={'https://cdn2.unrealengine.com/egs-marvelsspidermanremastered-insomniacgamesnixxessoftware-g2-00-1920x1080-53b44153e89a.jpg'} />
                        </Picture>
                      </MarginPicture>
                      <TextBold>Pre-Purchase Now</TextBold>
                      <MarginPicture>Pre-Purchase Now to unlock early game content, including;</MarginPicture>
                      <UlText>
                        <li>
                          <span>
                            Three-suit pack, including the Iron Spider Suit, Velocity Suit, and Spider-Punk Suit.
                          </span>
                        </li>
                        <li>
                          <span>
                            Early access to the powerful Spider-Drone Gadget.
                          </span>
                        </li>
                        <li>
                          <span>
                            Five Skill Points to unlock abilities from the start of the game.
                          </span>
                        </li>
                      </UlText>
                      <TextBold>Marvel's Spider-Man Remastered</TextBold>
                      <MarginPicture>
                        Developed by Insomniac Games in collaboration with Marvel, and optimized for PC by Nixxes Software, Marvel's Spider-Man Remastered on PC introduces an experienced Peter Parker who’s fighting big crime and iconic villains in Marvel’s New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of Marvel’s New York rests upon his shoulders.
                      </MarginPicture>
                      <TextBold>Key Features</TextBold>
                      <MarginPicture>
                        <strong>Be Greater</strong>
                        <br />
                        When iconic Marvel villains threaten Marvel’s New York, Peter Parker and Spider-Man’s worlds collide. To save the city and those he loves, he must rise up and be greater.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Feel like Spider-Man</strong>
                        <br />
                        After eight years behind the mask, Peter Parker is a crime-fighting master. Feel the full power of a more experienced Spider-Man with improvisational combat, dynamic acrobatics, fluid urban traversal and environmental interactions.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Worlds collide</strong>
                        <br />
                        The worlds of Peter Parker and Spider-Man collide in an original action-packed story. In this new Spider-Man universe, iconic characters from Peter and Spider-Man’s lives have been reimagined, placing familiar characters in unique roles.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Marvel’s New York is your playground</strong>
                        <br />
                        The Big Apple comes to life in Marvel’s Spider-Man. Swing through vibrant neighborhoods and catch breathtaking views of iconic Marvel and Manhattan landmarks. Use the environment to defeat villains with epic takedowns in true blockbuster action.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Enjoy The City That Never Sleeps complete content</strong>
                        <br />
                        Following the events of the main story of Marvel’s Spider-Man Remastered, experience the continuation of Peter Parker’s journey in Marvel’s Spider-Man: The City That Never Sleeps, three story chapters with additional missions and challenges to discover.
                      </MarginPicture>
                      <TextBold>PC Features</TextBold>
                      <MarginPicture>
                        <strong>PC Optimized Graphics</strong>
                        <br />
                        Enjoy a variety of graphics quality options to tailor to a wide range of devices, unlocked framerates, and support for other technologies including performance boosting NVIDIA DLSS and image quality enhancing NVIDIA DLAA.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Ray-traced reflections and improved shadows*</strong>
                        <br />
                        See the city come to life with improved shadows and stunning ray-traced reflection options with a variety of quality modes to choose from.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Ultra-wide Monitor support**</strong>
                        <br />
                        Take in the cinematic sights of Marvel’s New York with support for a range of screen setups, including 16:9, 16:10, 21:9, 32:9, and 48:9 resolutions.
                      </MarginPicture>
                      <MarginPicture>
                        <strong>Controls and Customization</strong>
                        <br />
                        Feel what it’s like to play as Spider-Man through immersive haptic feedback and dynamic trigger effects using a PlayStation DualSense™ controller on a wired USB connection. Enjoy full mouse and keyboard support with various customizable control options.
                      </MarginPicture>
                      <MarginPicture>
                        <em>*Compatible PC and display device required.</em>
                        <br></br>
                        <em>**Compatible PC required.</em>
                      </MarginPicture>
                    </ColorSpan>
                  </SpanGenres>
                </LongDescription>
                <DivButton>
                  <ButtonShow onClick={handleShow}>
                    <span>{show ? "Show less" : "Show More"}</span>
                    <SpanSvg toggle={show}>
                      <Down />
                    </SpanSvg>
                  </ButtonShow>
                  <OverlayButton toggle={show} />
                </DivButton>
              </Overflow>
            </Category>
          </Column>
        </MarginTop>
      </DivNone>
    </Left>
  )
}

export default LeftContent