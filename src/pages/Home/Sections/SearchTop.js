import React from 'react'
import styled from 'styled-components';
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import { Search as SearchIcon } from '../../../svg'

const Search = styled.div`
  height: 100px;
  background-color: rgb(18, 18, 18);
  position: sticky;
  top: 0;
  z-index: 999;
  /* &.sticky {
    position: fixed;
    width: 100%;
  } */
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  max-width: 1600px;
  display: flex;
  height: 100%;
  justify-content: 'space-between';
`
const InputSearch = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`

const Input = styled.div`
  align-items: center;
  background-color: rgb(32, 32, 32);
  border-radius: 24px;
  display: flex;
  height: 40px;
  margin: 8px 0;
  min-width: 160px;
  width: 160px;
`
const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100%;
  margin: 13.62px;
`

const ButtonIcon = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: rgba(245, 245, 245, 0.6);;
  background-color: inherit;
  position: relative;

  ::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
  }
  span{
    display: block;
    line-height: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 12.75px;
    width: 12.75px;
  }
  SearchIcon{
    width: 100%;
    height: 100%;
  }
`

const TextInput = styled.div`
  width: 100%;
  height: 100%;
`

const InputCenter = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
`

const SearchInput = styled.input`
  margin-right: 13.62px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(245, 245, 245);
  outline: none;
  width: 100%;

  :not(:focus){
    border-color: rgba(0, 0, 0, 0);
  }
  *:focus{
    border-color: rgba(0, 0, 0, 0);
    outline: none;
  }
  ::placeholder{
    font-weight: 500;
  }
`

const Choose = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`
const Opacity = styled.div`
  width: 100%;
  opacity: 0.4;
  transition: opacity 125ms ease-in-out;

  &:hover{
    opacity: 1;
  }
`

const Item = styled.a`
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 1px;
  
  &.active {
    ${Opacity}{
      opacity: 1;
    }
  }

  &.active::before{
    transition: border 125ms ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
  }
`

const ItemLink = styled(NavLink)`
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 1px;
  
  &.active {
    ${Opacity}{
      opacity: 1;
    }
  }

  &.active::before{
    transition: border 125ms ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    pointer-events: none;
  }
`

const Li = styled.li`
  display: flex;

  :nth-child(2){
    margin-left: 10px;
  }
  :last-child{
    margin-left: 10px;
  }
`


const TextEllipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  flex-shrink: 1;
`

const Span = styled.span`
  transition: color 125ms ease-in-out;
  color: rgb(245, 245, 245);
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

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 0;
  height: 100%;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LinkLi = ({to, children, ...props}) => {
  return (
      <div>
        <ItemLink 
          className={isActive => isActive ? 'active' : ''}
          to={to} 
          {...props}
        >
          <Opacity>
            <TextEllipsis>
              <Span>{children}</Span>
            </TextEllipsis>
          </Opacity>
        </ItemLink>
      </div>
  )
}

const SearchTop = () => {
  /*
  useEffect(() => {
    const search = document.getElementById('span-search');
    const sticky = search.offsetTop;
    const scrollCallback = window.addEventListener("scroll", () => {
      if(window.pageYOffset > sticky){
        search.classList.add("sticky");
      }
      else{
        search.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    }
  }, [])
  */

  return (
    <Search id="span-search">
      <Container>
        <InputSearch>
          <Input>
            <Icon>
              <ButtonIcon>
                <span>
                  <SearchIcon />
                </span>
              </ButtonIcon>
            </Icon>
            <TextInput>
              <InputCenter>
                <SearchInput placeholder='Search store'></SearchInput>
              </InputCenter>
            </TextInput>
          </Input>
        </InputSearch>
        <Choose>
          <span>
            <Ul>
              <Li><LinkLi to="/discover">Discover</LinkLi></Li>
              <Li><LinkLi to="/browse">Browse</LinkLi></Li>
              <Li><LinkLi to="/news">News</LinkLi></Li>
            </Ul>
          </span>
        </Choose>
        <Cart>
          <Options>
            <LinkLi to="/wishlist">Wishlist</LinkLi>
            <LinkLi to="/cart">Cart</LinkLi>
          </Options>
        </Cart>
      </Container>
    </Search>
  )
}

export default SearchTop