import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { THEMES } from "../../../Theme/ColorTheme.js";
import { Search as SearchIcon } from "../../../svg";
import { Drop as DropIcon, Arrow } from "../../../svg";
import { CardGame } from "../../Home/Sections/HorizontalView.js";
import CategoreList from '../data/CategoreList.js'
import {EVENTS, GENRE, FEATURES, TYPES, PLATFORM} from '../data/Filter.js'

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: normal;
`;
const Filter = styled.div`
  width: 245px;
  flex-shrink: 0;
`;
const ListFilter = styled.div`
  font-size: 1rem;
  line-height: normal;
  overflow: hidden;
  width: 100%;
`;
const LineFilter = styled.div`
  line-height: normal;
  font-size: 1rem;
  &::after {
    content: "";
    background-color: ${THEMES.white245};
    display: block;
    height: 1px;
    margin: 6px -28px 14px;
    opacity: 0.1;

    @media (min-width: 1024px) {
      margin: 6px 14px;
    }
  }
`;
const DivNone = styled.div``;
const TopFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 6px;
  height: 54px;
`;
const CountFilter = styled.div`
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-transform: none;
  color: ${THEMES.white245};
  padding: 0 12px;
`;
const ButtonReset = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 13px 11px;
  color: ${THEMES.white245};
  border: 1px solid transparent;
  cursor: pointer;
`;
const TextButton = styled.div`
  font-size: 11px;
  letter-spacing: 0.5px;
  line-height: 1.625;
  text-transform: uppercase;
`;
const SearchKeyword = styled.div`
  padding: 0 12px;
  margin-bottom: 15px;
`;
const PaddingSearcher = styled.div`
  color: ${THEMES.white245};
  position: relative;
`;
const SpanSearcher = styled.span`
  display: block;
  position: absolute;
  top: 13px;
  left: 10px;
  width: 13px;
  height: 13px;
  line-height: 0;
  z-index: 1;
`;
const InputSearch = styled.input`
  position: relative;
  color: ${THEMES.white245};
  background-color: ${THEMES.black32};
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding-right: 30px;
  padding-left: 40px;
  box-sizing: border-box !important;

  &:not(:focus) {
    border-color: rgba(0, 0, 0, 0);
  }
  &:focus {
    outline: none;
  }
`;
const ContentDrop = styled.div`
  /* display: block; */
`;
const RowDrop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const ButtonShow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${THEMES.white245};
  font-weight: 500;
  opacity: 0.6;
  padding: 20px 14px;
  width: 100%;
`;
const SvgSpan = styled.span`
  display: block;
  height: 12px;
  width: 20px;
  line-height: 0;
  transform: rotate(90deg);
  transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
    opacity 0.125s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const DropItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 3px;
  margin-bottom: 5px;
  opacity: 0.6;
  padding: 12px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const ContentItem = styled.div`
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  color: ${THEMES.white245};
`;
// left
const GameContent = styled.div`
  width: calc(100% - 245px);
  padding-right: 15px;
`;
const SectionGame = styled.section`
  margin-bottom: 60px;
  border: 1px solid transparent;
  width: 100%;
  padding: 0px;

  @media (min-width: 768px) {
    margin-bottom: 71px;
  }
  @media (min-width: 1024px) {
    padding: 0px;
    flex: 1 1 0%;
  }
  @media (min-width: 1280px) {
    margin-bottom: 80px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
const ContentWidth = styled.div`
  margin: 0 auto;
  max-width: 1920px;

  @media (min-width: 1024px) {
    height: 100%;
  }

  & > div {
    max-width: none !important;
  }
`;
const DropShow = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row-reverse wrap-reverse;
  padding-top: 20px;

  @media (min-width: 1024px) {
    height: 60px;
    margin-top: 0px;
    padding-top: 0px;
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    height: 60px;
  }
`;
const Margin = styled.div`
  margin-left: -5px;
  & > button {
    margin-bottom: 0px;
  }
`;
const AllGames = styled.section`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.4;
  height: 100%;
  flex: 0 1 auto;
`;
const PositionDrop = styled.div`
  width: 100%;
  position: relative;
`;
const DropShowBtn = styled.button`
  position: relative;
  border: 1px solid transparent;
  font-size: 14px;
  letter-spacing: 0.2px;
  width: auto;
  line-height: 1.4;
  color: currentcolor;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  opacity: 0.75;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: currentcolor solid 1px;
    opacity: 0;
  }
  &:hover {
    opacity: 1;
  }
`;
const FirstDrop = styled.span`
  opacity: 0.6;
  margin-right: 5px;
`;
const SecondDrop = styled.span`
  margin-right: 5px;
`;
const ThirdDrop = styled.span`
  display: block;
  line-height: 0;
  color: currentcolor;
  width: 8px;
  height: 10px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const ContentDropShow = styled.div`
  color: ${THEMES.white245};
  background-color: ${THEMES.black32};
  border-radius: 3px;
  margin-top: 5px;
  padding: 10px 0px;
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 35px 0 rgb(0 0 0 / 50%);
  width: max-content;
  min-width: 150px;
`;
const SpanContentShow = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: currentcolor;
    opacity: 0;
  }
`;
const ButtonContentShow = styled.button`
  transition: opacity 125ms ease-in-out;
  width: 100%;
  color: currentcolor;
  display: block;
  padding: 8px 20px;
  font-size: 14px;
  position: relative;
  opacity: 0.5;
  margin-bottom: 0;

  text-align: left;

  &.active{
    {
      opacity: 1;
      ${SpanContentShow}::after {
        opacity: 1;
      }
    }
  }

  &:hover {
    opacity: 1;
    ${SpanContentShow}::after {
      opacity: 1;
    }
  }
`;
const SectionWidth = styled.section`
  padding-bottom: 16px;
  width: 100%;
`;
const UlGame = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const LiGame = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: transparent;
  margin-bottom: 16px;
  margin-left: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 48px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 48px;
  }
  @media (min-width: 1920px) {
    width: calc(20% - 16px * 0.8);

    &:nth-child(5n + 1) {
      margin-left: 0;
    }
  }
`;
const NavPagination = styled.nav``;
const UlPagination = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
const LiPagination = styled.li`
  list-style: none;
  width: 30px;
  display: flex;
  justify-content: center;
`
const LinkPagination = styled.a`
  border: 1px solid transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245, 245, 245, 0.6);

  &:hover, &[aria-current="true"] {
    color: rgb(245, 245, 245);
    font-weight: 700;
}
`
const Pagination = () => {
  return (
    <NavPagination>
      <UlPagination>
        <LiPagination>
          <LinkPagination aria-current="true">
            1
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            2
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            3
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            4
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            5
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            6
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            7
          </LinkPagination>
        </LiPagination>
        <LiPagination>
          <LinkPagination>
            8
          </LinkPagination>
        </LiPagination>
      </UlPagination>
    </NavPagination>
  )
} 

const CategoryGame = () => {

  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("New Release");

  const showHandler = () => {
    setShow(show => !show)
  }

  const DropTest = ({ title, DATA, handleDropdown, id, dropdown }) => {
    const ref = useRef();
    useEffect(() => {
      const handleClick = e => {
        if(!e.target.classList.contains('dropdown')){
          handleDropdown(null)
        }
      };
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, [handleDropdown])

    return (
      <LineFilter>
        <RowDrop>
          <ButtonShow onClick={() => handleDropdown(id)} ref={ref} className='dropdown'>
            <TextButton>{title}</TextButton>
            <SvgSpan>
              <DropIcon />
            </SvgSpan>
          </ButtonShow>
        </RowDrop>
        {id === dropdown && <ContentDrop style={{display: `${drop ? 'block' : 'none'}}`}}>
          <DivNone>
            {DATA.map((item, index) => {
              return (
                <div key={index}>
                  <DropItem>
                    <ContentItem>{item.content}</ContentItem>
                  </DropItem>
                </div>
              );
            })}
          </DivNone>
        </ContentDrop>}
      </LineFilter>
    );
  };

  const AllContentDrop = ({ title, onClick }) => {
    return (
      <ButtonContentShow onClick={() => handleSetDropContent(`${title}`)} className={dropdownValue === title ? 'active' : ''}>
        <SpanContentShow>
          <span>{title}</span>
        </SpanContentShow>
      </ButtonContentShow>
    );
  };

  const handleSetDropContent = (value) => {
    setDropdownValue(value)
    setShow(show => !show);
  }

  const handleDropdown = id => {
    if (drop === id) {
        setDrop(null);
    }
    if (drop !== id) {
        setDrop(id);
    }
  };

  return (
    <Container>
      <Filter>
        <ListFilter>
          {/* 1 */}
          <LineFilter>
            <DivNone>
              <TopFilter>
                <CountFilter>Filters (1)</CountFilter>
                <ButtonReset>
                  <TextButton>Reset</TextButton>
                </ButtonReset>
              </TopFilter>
            </DivNone>
            <DivNone>
              <SearchKeyword>
                <PaddingSearcher>
                  <SpanSearcher>
                    <SearchIcon />
                  </SpanSearcher>
                  <InputSearch placeholder="Keywords" />
                </PaddingSearcher>
              </SearchKeyword>
            </DivNone>
          </LineFilter>
          {/* 2 */}
          <DropTest title="Events" DATA={EVENTS}  handleDropdown={handleDropdown} dropdown={drop} id='1'  />
          <DropTest title="Genre" DATA={GENRE}  handleDropdown={handleDropdown} dropdown={drop} id='2'  />
          <DropTest title="Features" DATA={FEATURES}  handleDropdown={handleDropdown} dropdown={drop} id='3'  />
          <DropTest title="Types" DATA={TYPES}  handleDropdown={handleDropdown} dropdown={drop} id='4' />
          <DropTest title="Platform" DATA={PLATFORM}  handleDropdown={handleDropdown} dropdown={drop} id='5'  />
        </ListFilter>
      </Filter>
      <GameContent>
        <SectionGame>
          <ContentWidth>
            <DropShow>
              <Margin>
                <PositionDrop>
                  <DropShowBtn onClick={showHandler}>
                    <FirstDrop>
                      <span>Show:</span>
                    </FirstDrop>
                    <SecondDrop>
                      <span>{dropdownValue}</span>
                    </SecondDrop>
                    <ThirdDrop  style={{
                      transition: "transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
                      transform: `rotateZ(${show ? 90 : -90}deg)`,
                    }}>
                      <Arrow />
                    </ThirdDrop>
                  </DropShowBtn>
                  {show && <ContentDropShow>
                    <AllContentDrop title="All" />
                    <AllContentDrop title="New Release" />
                    <AllContentDrop title="Coming Soon" />
                    <AllContentDrop title="Alphabetical" />
                    <AllContentDrop title="Price: High to Low" />
                    <AllContentDrop title="Price: Low to High" />
                  </ContentDropShow>}
                </PositionDrop>
              </Margin>
            </DropShow>
            <AllGames>
              <SectionWidth>
                <UlGame>
                  {CategoreList.map((item, index) => {
                    return (
                      <LiGame key={index}>
                        <CardGame
                          image={`${item.image}`}
                          name={item.name}
                          sale={item.sale}
                          newEpic={item.newEpic}
                          oldPrice={item.oldPrice}
                          newPrice={item.newPrice}
                        />
                      </LiGame>
                    );
                  })}
                </UlGame>
              </SectionWidth>
              {Pagination}
            </AllGames>
          </ContentWidth>
        </SectionGame>
      </GameContent>
    </Container>
  );
};

export default CategoryGame;
export {Pagination}
