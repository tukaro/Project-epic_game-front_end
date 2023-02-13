import React from "react";
import styled from "styled-components";
import { THEMES } from "../../../Theme/ColorTheme.js";
import {Star} from '../../../svg'
import ListGame from '../Data/ListUpdate.js'

const UlNewsletter = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  max-width: 100%;

  & > li:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: 1600px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin-left: auto;

    & > li:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
const LinkCard = styled.a`
  display: flex;
`;
const LeftCard = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 20px;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.20));
    transition: all 0.5s ease;
    opacity: 0;
  }
`;
const WidthImage = styled.div`
  position: relative;
  width: 200px;
  display: block;
`;
const Bottom = styled.div`
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);
`;
const Picture = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: opacity 125ms ease-in-out;
  opacity: 1;
`
const RightCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const SpanSvg = styled.span`
  position: relative;
  display: block;
  line-height: 0;
  width: 12px;
  height: 12px;
  padding: 0;

  svg{
    width: 100%;
    height: 100%;
    fill: rgba(255, 255, 255, 0.50)
  }
`
const DateNews = styled.div`
  color: rgba(255, 255, 255, 0.50);
  font-size: 11px;
  letter-spacing: 0.5px;
  line-height: 1.625;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`
const DateAgo = styled.span`
  position: relative;
  padding: 0 10px;
`
const Description = styled.h2`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  color: #fff;
`
const Grid = styled.div`
  display: grid;
`
const WordBreak = styled.div`
  overflow: hidden;
  word-break: break-word;
  line-clamp: 3;
`
const ReadMore = styled.div`
  color: #fff;
  margin-top: auto;
`
const SpanRead = styled.span`
  display: inline-block;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
  transition: all 0.5s ease;
`
const LiNews = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  width: 100%;
  padding-top: 20px;
  margin-top: 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 1600px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:hover {
    ${LeftCard}::after{
      opacity: 1;
    }
    ${SpanRead} {
      border-color: #fff;
    }
  }
`;
const ListNews = () => {
  return (
    <UlNewsletter>
      {ListGame.map((item, index) => {
        return (
          <LiNews key={index}>
            <div>
              <LinkCard>
                <LeftCard>
                  <WidthImage>
                    <Bottom>
                      <Picture>
                        <Image src={`${item.image}`}/>
                      </Picture>
                    </Bottom>
                  </WidthImage>
                </LeftCard>
                <RightCard>
                  <DateNews>
                    {item.star && <SpanSvg>
                      <Star />
                    </SpanSvg>}
                    <DateAgo style={{paddingLeft: item.star ? '10px' : " 0px"}}>{item.date}</DateAgo>
                  </DateNews>
                  <Description>
                    <Grid>
                      <WordBreak>
                        {item.description}
                      </WordBreak>
                    </Grid>
                  </Description>
                  <ReadMore>
                    <SpanRead>Read more</SpanRead>
                  </ReadMore>
                </RightCard>
              </LinkCard>
            </div>
          </LiNews>
        )
      }) 
      }
    </UlNewsletter>
  );
};

export default ListNews;
