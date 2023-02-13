import React, { useState } from 'react'
import { THEMES } from '../../../Theme/ColorTheme.js'
import styled from 'styled-components'
import "@fontsource/open-sans"
import logo from '../../../assets/logo-white.svg'
import 'boxicons'

const Section = styled.section`
  width: 100%;
  height: 52px;
  align-self: left;
  top: 0;
  z-index: 1000;
`
const Relative = styled.div`
  background: ${THEMES.black32};
  position: relative;
`
const TagHeader = styled.header`
  background: #2a2a2a;
  font-size: 14px!important;
  height: 3.7em;
  line-height: 1.42857143;
  position: static!important;
`
const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  font-size: 100%;
  z-index: 9999;
  max-width: 100%;
  background-color: #2a2a2a;
  color: #e7e7e7;
  height: 3.7em;
`
const Left = styled.div`
  height: 3.7em;
  padding: 0;
`
const Right = styled.div`
  height: 3.7em;
  list-style: none;
  padding: 0 0 0 1em;
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  z-index: 6;
`

const Logo = styled.a`
  cursor: pointer;
  float: left;
  height: 3.7em;
  overflow: hidden;
  width: 5em;
  background-color: #2a2a2a;
  background: url(${logo}) 50% no-repeat;
  background-size: 35px auto;
  outline: 0!important;
`
const Box = styled.div`
  cursor: pointer;
  float: left;
  height: 3.7em;
  overflow: hidden;
  width: 5em;
  transition: opacity .2s ease-out;
`
const BoxMenu = styled.div`
  display: inline-block;
  float: left;
  height: 100%;
  padding: 0 30px;
  pointer-events: auto;
  position: relative;
  transition: .1s;
  cursor: pointer;
  opacity: 1;
  transition: opacity .2s ease-in-out;

  &.active{
    opacity: 0;
    visibility: hidden;
  }

  &:hover{
    border: 1px solid red;
  }

  span{
    border-radius: 2.14286px;
    display: inline-block;
    height: 3px;
    left: 50%;
    margin-left: -15px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    transition: .1s;
    width: 30px;
    background-color: #e7e7e7;
  }
  span::before{
    border-radius: 2.14286px;
    top: 8px;
    content: "";
    display: inline-block;
    height: 3px;
    left: 0;
    background-color: #e7e7e7;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    width: 30px;
  }
  span::after {
    top: -8px;
    border-radius: 2.14286px;
    content: "";
    display: inline-block;
    height: 3px;
    left: 0;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    width: 30px;
    background-color: #e7e7e7;
  }
`
const BgButton = {
  background: "#0078f2",
}
const ButtonRight = styled.div`
  cursor: pointer;
  float: left;
  height: 100%;
  overflow: visible;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
`
const Download = styled.a`
  font-family: "Open Sans", sans-serif;
  display: block;
  height: 100%;
  letter-spacing: .075em;
  min-width: 50px;
  padding: 0 1em;
  text-align: center;
  text-transform: uppercase;

  .download{
    display: block;
    max-width: 220px;
    min-width: 100px;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 400;
    font-size: .625em;
    line-height: 22px;
    letter-spacing: 1.05px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
  }

`
const Contact = styled.div`
  font-family: "Open Sans", sans-serif;
  display: block;
  height: 100%;
  letter-spacing: .075em;
  min-width: 60px;
  text-align: center;
  text-transform: uppercase;
  .use-name{
    display: inline-block;
    font-size: .625em;
    line-height: 22px;
    color: #e7e7e7;
    padding: 0 10px;
    margin: 0;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  i{
    display: block;
    float: left;
    font-size: 1.25em;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    color: #ccc;
  }

  .bxs-user::after{
    background-color: #52971c;
    border-radius: 50%;
    bottom: -1px;
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    right: 0px;
    width: 8px;
  }
`

/* overlay */
const Overlay = styled.div`
  background-color: rgba(0,0,0,0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 3.7em;
  height: 100%;
  width: 100%;
  opacity: 1;
  cursor: default;
  padding: 1em;
  transition: opacity 0.3s cubic-bezier(.075, .82, 1, 1) ;
  z-index: -1;

  &:hover{
    outline: 1px solid hsla(0,0%,80%,.5)!important;
    outline-offset: -6px;
    text-decoration: none;
  }
`
const SideBarUl = styled.ul`
  height: 100vh;
  position: absolute;
  max-width: 100%;
  margin: 0;
  padding: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color:  #2a2a2a;
  float: left;
  top: 3.7em;
  width: 90.75vw;
  list-style-type: none;
  list-style: none;
  z-index: 3;
  transition: transform .2s cubic-bezier(.075,.82,1,1),-webkit-transform .2s cubic-bezier(.075,.82,1,1);

  &.active{
    transform: translateZ(0);
  }

  &#ultab{
    list-style:none;
    width: 90.75vw;
  }
`
const ContentLi = styled.li`
  clear: both;
  display: block;
  float: none;
  height: auto;
  width: 100%;
  border-bottom: 1px solid;
  padding: 1em 2em;
  visibility: visible;
  color: #fff;
  padding-right: 0!important;
  position: relative;
  border-color: #333!important;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 5px;
    background-color: transparent;
    transition: height .2s ease-in-out;
    z-index: -1;
  }
`
const LiLink = styled.a`
  font-size: 1.5em;
  height: 20px;
  max-height: 40px;
  text-align: left;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  color: #ccc;
  display: block;
  letter-spacing: 0.075em;
  padding: 0 1em;
  text-transform: uppercase;

  div {
    font-size: 0.75em;
    font-weight: 400;
    color: #e7e7e7;
    text-shadow: none;
  }
`

const LinkSidebar = ({ title }) => {
  return (
    <ContentLi>
      <LiLink>
        <div>{title}</div>
      </LiLink>
    </ContentLi>
  )
}

const Header = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(sidebar => !sidebar);
  const closeSidebar = () => setSidebar(false)

  return (
    <Section id="header">
      <Relative>
        <TagHeader>
          <NavBar>
            <Left>
              <Box>
                <Logo />
              </Box>
              <BoxMenu onClick={showSidebar} className={sidebar ? "active" : ''}>
                <span></span>
              </BoxMenu>
              {sidebar && <div active={setSidebar}>
                <Overlay onClick={closeSidebar} />
                <SideBarUl id="ultab" className={sidebar ? "active" : ''}>
                  <LinkSidebar title="Store" />
                  <LinkSidebar title="FAQ" />
                  <LinkSidebar title="Help" />
                  <LinkSidebar title="Unreal engine" />
                </SideBarUl>
              </div>}
            </Left>
            <Right>
              <ButtonRight>
                <Contact>
                  <i className='bx bx-globe' ></i>
                </Contact>
              </ButtonRight>
              <ButtonRight>
                <Contact>
                  <i className='bx bxs-user' ></i>
                  <span className='use-name'>hiepham001</span>
                </Contact>
              </ButtonRight>
              <ButtonRight style={BgButton}>
                <Download><span className='download'>Download</span></Download>
              </ButtonRight>
            </Right>
          </NavBar>
        </TagHeader>
      </Relative>
    </Section>
  )
}

export default Header