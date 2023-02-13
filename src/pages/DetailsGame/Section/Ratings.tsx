import React from 'react'
import styled from 'styled-components';
import { THEMES } from '../../../Theme/ColorTheme'
import {Specifications} from './'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {StarNoBorder, SeeAll} from '../../../svg'
import '../../style.css'

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const WidthContent = styled.div`
  @media (min-width: 1280px) {
    width: calc(100% - 384px);
  }
`
const Column = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`
const Margin = styled.div`
  margin-top: 20px;
`
const Title = styled.div`
  margin-bottom: 20px;
`
const TextTitle = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;

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
const FlexRating = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-top: 25px;
`
const WidthRating = styled.div`
  width: 100%;

  &:not(:first-child) {
    margin-top: 30px;
  }
`
const RatingUl = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
`
const RatingLi = styled.li`
  max-width: calc(33.3333% - 13.3333px);

  &:not(:first-child){
    margin-left: 20px;
  }
`
const CircleRatings = styled.div`
  height: 75px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > svg {
    display: block;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  & > svg > .borderGrey {
    fill: none;
    stroke: rgb(32, 32, 32);
  }
  & > svg > .borderBlue {
    fill: none;
    stroke: rgb(0, 116, 228);
  }
`
const TitleRating = styled.div`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 10px;
  text-align: center;
`
const PercentRating = styled.div`
  text-align: center;
  font-size: 100%;
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const WidthReview = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const WidthRelative = styled.div`
  width: 100%;
  position: relative;
`
const Zindex = styled.div`
  position: relative;
  z-index: 0;
`
const CardHeight = styled.div`
  height: 100%;
  display: flex;
  justify-content: stretch;
`
const BgCard = styled.div`
  border-radius: 4px;
  background: ${THEMES.black32};
  padding: 20px;
`
const FlexInCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const NameReview = styled.div`
  margin-bottom: 20px;
`
const WidthTitle = styled.div`
  width: 100%;
`
const SpanTitle = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white245};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const SpanName = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white06};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const Divider = styled.div`
  width: 100%;

  & > div {
    height: 1px;
    max-height: 1px;
    min-height: 1px;
    background-color: ${THEMES.white41}
  }
`
const ContentReview = styled.div`
  margin: 20px 0px;
`
const ContentWidth = styled.div`
  width: 100%;
  margin: 20px 0px;
`
const StarUl = styled.ul`
  display: flex;
  place-content: center left;
  list-style: none;
  padding: 0;
  margin: 0;
`
const StarLi = styled.li``
const StarSpanWhite = styled.span`
  display: block;
  line-height: 0;
  width: 13px;
  height: 13px;
  opacity: 1;

  svg{
    width: 100%;
    height: 100%;
  }
`
const StarSpan = styled.span`
  display: block;
  line-height: 0;
  width: 13px;
  height: 13px;
  opacity: 0.2;

  svg{
    width: 100%;
    height: 100%;
  }
`
const ReadFull = styled.div`
  text-transform: uppercase;
  margin-top: auto;
`
const LinkRead = styled.a`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 0s ease 0s, border 200ms ease 0s;
  text-decoration: underline;
  border: 1px solid transparent;
  color: rgb(245, 245, 245);

  @media (min-width: 1600px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
  }
`
const SvgView = styled.span`
  line-height: 0;
  width: 12px;
  display: inline-block;
  position: relative;
  height: 1em;
  top: 2px;
  margin-left: 0.25em;

  svg {
    width: 100%;
    height: 100%;
  }
`
const ProvidedSpan = styled.span`
  transition: color 125ms ease-in-out;
  color: ${THEMES.white06};
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0;


  @media(min-width: 1600px){
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }
`


interface ItemCard {
  title: string
  name: string
  star: boolean
  vote: boolean
  contentVote: string
  content: string
}


const ItemReview: React.FC<ItemCard> = ({title, name, star, vote, contentVote, content}) => {
  return (
    <CardHeight>
      <BgCard>
        <FlexInCard>
          <NameReview>
            <WidthTitle>
              <SpanTitle>{title}</SpanTitle>
            </WidthTitle>
            <WidthTitle>
              <SpanName>
                <span>by {name}</span>
              </SpanName>
            </WidthTitle>
          </NameReview>
          <Divider>
            <div></div>
          </Divider>
          <ContentReview>
            <WidthTitle>
              {star && <SpanTitle>
                <StarUl>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpan>
                      <StarNoBorder />
                    </StarSpan>
                  </StarLi>
                </StarUl>
              </SpanTitle>}
              {vote && <SpanTitle>
                {contentVote}
              </SpanTitle>}
            </WidthTitle>
            <ContentWidth>
              <SpanName>{content}</SpanName>
            </ContentWidth>
          </ContentReview>
          <ReadFull>
            <SpanName>
              <LinkRead>
                <SpanName>
                  <span>Read Full Review</span>
                  <SvgView>
                    <SeeAll />
                  </SvgView>
                </SpanName>
              </LinkRead>
            </SpanName>
          </ReadFull>
        </FlexInCard>
      </BgCard>
    </CardHeight>
  )
}

const Rating = ({percent, title, stroke, strokeOffset}) => {
  return(
    <RatingLi>
      <CircleRatings>
        <svg 
          viewBox="0 0 75 75" 
          height="75" width="75" 
          version="1.1" 
          className="css-t0grqz"
        >
          <circle 
          strokeWidth="3" 
          cx="50%" 
          cy="50%" 
          r="36" 
          className="borderGrey"
          ></circle>
          <circle 
          strokeWidth="3" 
          cx="50%" 
          cy="50%" 
          r="36" 
          className="borderBlue" 
          strokeDasharray={stroke}
          strokeDashoffset={strokeOffset}>
          </circle>
        </svg>
        <PercentRating>{percent}</PercentRating>
      </CircleRatings>
      <TitleRating>
        <span>{title}</span>
      </TitleRating>
    </RatingLi>
  )
}
const CardReview = ({title, name, star, vote, content}) => {
  return (
    <CardHeight>
      <BgCard>
        <FlexInCard>
          <NameReview>
            <WidthTitle>
              <SpanTitle>{title}</SpanTitle>
            </WidthTitle>
            <WidthTitle>
              <SpanName>
                <span>by {name}</span>
              </SpanName>
            </WidthTitle>
          </NameReview>
          <Divider>
            <div></div>
          </Divider>
          <ContentReview>
            <WidthTitle>
              {star && <SpanTitle>
                <StarUl>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpanWhite>
                      <StarNoBorder />
                    </StarSpanWhite>
                  </StarLi>
                  <StarLi>
                    <StarSpan>
                      <StarNoBorder />
                    </StarSpan>
                  </StarLi>
                </StarUl>
              </SpanTitle>}
              {vote && <SpanTitle>
                9 / 10
              </SpanTitle>}
            </WidthTitle>
            <ContentWidth>
              <SpanName>{content}</SpanName>
            </ContentWidth>
          </ContentReview>
          <ReadFull>
            <SpanName>
              <LinkRead>
                <SpanName>
                  <span>Read Full Review</span>
                  <SvgView>
                    <SeeAll />
                  </SvgView>
                </SpanName>
              </LinkRead>
            </SpanName>
          </ReadFull>
        </FlexInCard>
      </BgCard>
    </CardHeight>
  )
}
const Ratings = () => {
  return (
    <FlexColumn>
      <FlexRow>
        <WidthContent>
          <Margin>
            <Column>
              <Title>
                <TextTitle>
                  <span>Ratings</span>
                </TextTitle>
              </Title>
              <FlexColumn>
                <FlexRating>
                  <WidthRating>
                    <RatingUl>
                      <Rating title="Critics Recommend" percent="100%" stroke="226.1946710584651, 226.1946710584651" strokeOffset="0" />
                      <Rating title="Top Critic Average" percent="88%" stroke="226.1946710584651, 226.1946710584651" strokeOffset="27.143360527015812" />
                      <Rating title="OpenCritic Rating" percent="Mighty" stroke="51.548667764616276, 5, 51.548667764616276, 5, 51.548667764616276, 5, 51.548667764616276, 226.1946710584651" strokeOffset="-2.5" />
                    </RatingUl>
                  </WidthRating>
                  <WidthRating>
                    <WidthReview>
                      <WidthRelative>
                        <Zindex>
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            slidesPerGroup={3}
                            loop={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                          >
                            <SwiperSlide className="slide-swiper">
                              <ItemReview 
                                title="We Got This Covered" 
                                name="Billy Givens" 
                                star={true}
                                vote={false}
                                contentVote=''
                                content="Spider-Man Remastered is the absolute best way to experience the original's engrossing gameplay and emotional story beats -- even its occasional banal elements are overshadowed by the immense improvements made to almost every aspect of the visual and tangible experience." 
                              />
                            </SwiperSlide>
                            <SwiperSlide className="slide-swiper">
                              <ItemReview 
                                title="IGN" 
                                name="Jonathon Dornbush" 
                                star={false}
                                vote={true}
                                contentVote='9 / 10'
                                content="Spider-Man Remastered is the definitive version of one of the best superhero games ever made." 
                              />
                            </SwiperSlide>
                            <SwiperSlide className="slide-swiper">
                              <ItemReview 
                                title="GamingTrend" 
                                name="David Burdette" 
                                star={false}
                                vote={true}
                                contentVote='9 / 10'
                                content="Marvel's Spider-Man Remastered is the definitive way to play the game, whether you've played the original or not, and it's so good you should play it again." 
                              />
                            </SwiperSlide>
                          </Swiper>
                        </Zindex>
                      </WidthRelative>
                    </WidthReview>
                  </WidthRating>
                  <WidthRating>
                    <ProvidedSpan>
                      <span>Reviews provided by OpenCritic</span>
                    </ProvidedSpan>
                  </WidthRating>
                </FlexRating>
              </FlexColumn>
            </Column>
            <Column>
              <Specifications></Specifications>
            </Column>
          </Margin>
        </WidthContent>
      </FlexRow>
    </FlexColumn>
  )
}

export default Ratings