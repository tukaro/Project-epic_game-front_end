import React from 'react'
import styled from 'styled-components';
import "@fontsource/open-sans";
import 'bootstrap/dist/css/bootstrap.css';
import {THEMES} from '../../../Theme/ColorTheme.js';
import { Facebook, Twitter, Youtube, Arrow, Unreal, Epic } from '../../../svg'

const WidthFooter = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  align-self: flex-end;
`
const FooterColor = styled.footer`
  background-color: ${THEMES.black32};
  border-top: none;
  text-size-adjust: 100%;
  font-size: 16px;
  padding: 1.25em 4.5em 2.5em;
  position: relative;
  z-index: 10;
`
const Medical = styled.div`
  ul{
    background-color: transparent;
  }
  .social li {
    margin: 0 0 0.5em;
    padding: 0 0.35em;
    display: inline-block;
  }
  .social li svg{
    width: 35px;
    height: 35px;
  }
  .pull-right svg{
    color: #ccc;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .social li:first-child {
    padding-left: 0;
  }
`
const ChevronUp = styled.button`
  background-color: transparent;
  border: 2px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  float: right;
  height: 2.1em;
  width: 2.1em;
  margin: 1.25em 1em 0 0;
  padding: 0.25em;
  transition: border .3s ease-in-out;
  user-select: none;
`
const Resources = styled.div`
  .footer-link{
    color: #e7e7e7;
    float: left;
  }
  .subtitle{
    display: block;
    font-size: 0.86em;
    font-weight: 700;
    margin-bottom: 4px;
    padding-top: 1.5em;
    color: ${THEMES.white06};
  }
  .footerLinks{
    float: left;
    list-style: none;
    margin: 0;
    padding: 0 2.6em 0.5em 0;
  }
  .footerLinks li {
    line-height: 1.5em;
  }
  .footerLinks li a:hover{
    color: #0078f2!important;
  }
  .footerLinks li a{
    text-decoration: none;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: .86em;
    transition: color .3s ease-in-out;
  }
`
const Hr = styled.div`
  margin: 1em 0;
  background-color: ${THEMES.black32};
  height: 0;
  box-sizing: content-box;
  border-style: solid none none;
  border-color: #333!important;
`
const AllRight = styled.div`
  border-top: #dfdfdf;
  margin-top: 0px;
  padding: 1em;

  .nopadding{
    padding-left: 0;
    padding-right: 0;
  }
  .copyright{
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: .71em;
    font-weight: 400;
    line-height: 2em;
    margin: 0;
    padding-top: 0.5em;
  }
  .copyright span{
    color: #ccc;
  }
`
const Terms = styled.div`
  .legal{
    padding: 1em 0 0 1em;
    color: #e7e7e7;
    position: relative;
  }
  .legal .links li {
    display: inline;
    padding: 0 1em 0 0 ;
  }
  .legal .links li a {
    font-size: .75em;
    transition: color 0.2s ease-in-out;
  }
  .legal .logo {
    display: flex;
    justify-content: flex-end;
  }
  .legal .logo li {
    margin: 5px 0.75em 5px 0;
  }
  .legal .logo li svg{
    width: 35px;
    height: 35px;
  }
`
function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <WidthFooter>
      <FooterColor>
        <Medical className="row">
          <div className="col-xs-10 col-sm-8 icon-medical">
            <ul className="social">
              <li>
                <a href="" className='social-icon'>
                  <Facebook/>
                </a>
              </li>
              <li>
                <a href="">
                  <Twitter/>
                </a>
              </li>
              <li>
                <a href="">
                  <Youtube/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-2 col-sm-4 pull-right">
            <ChevronUp onClick={scrollTop}>
              <Arrow/>
            </ChevronUp>
          </div>
        </Medical>
        <Resources className='row'>
          <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
            <div className="footer-link">
              <div className="inner-wrap">
                <div className="subtitle">
                  <span>Resources</span>
                </div>
                <ul className="footerLinks">
                  <li><a href="">Support-A-Creator</a></li>
                  <li><a href="">Publish on Epic Games</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Company</a></li>
                </ul>
                <ul className="footerLinks">
                  <li><a href="">Fan Art Policy</a></li>
                  <li><a href="">UX Research</a></li>
                  <li><a href="">Store EULA</a></li>
                </ul>
                <ul className="footerLinks">
                  <li><a href="">Online Services</a></li>
                  <li><a href="">Community Rules</a></li>
                  <li><a href="">Epic Newsroom</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-link">
              <div className="inner-wrap">
                <div className="subtitle">
                  <span>Made By Epic Games</span>
                </div>
                <ul className="footerLinks">
                  <li><a href="">Battle Breakers</a></li>
                  <li><a href="">Fortnite</a></li>
                  <li><a href="">Infinity Blade</a></li>
                </ul>
                <ul className="footerLinks">
                  <li><a href="">Robo Recall</a></li>
                  <li><a href="">Shadow Complex</a></li>
                  <li><a href="">Unreal Tournament</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Resources>
        <Hr/>
        <AllRight className="row">
          <div className="col-xs-12 col-md-12 col-lg-6 nopadding">
            <div className="copyright">
              <span>
                © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l. 
              </span>
            </div>
          </div>
        </AllRight>
        <Terms className="row">
          <div className="col-xs-12 col-sm-6 legal">
            <ul className="links">
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Store Refund Policy</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 legal">
            <ul className="logo">
              <li><a href=""><Epic/></a></li>
              <li><a href=""><Unreal/></a></li>
            </ul>
          </div>
        </Terms>
      </FooterColor>
    </WidthFooter>
  )
}

export default Footer