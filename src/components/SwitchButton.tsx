import React from 'react'
import styled from "styled-components";
import { THEMES } from '../Theme/ColorTheme';

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckboxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 36px;
  height: 20px;
  background-color: ${THEMES.white06};
  cursor: pointer;
  &::after{
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #ffffff;
    background-clip: padding-box;
    border: 2px solid transparent;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: all 125ms ease-in-out;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 10px;
  width: 36px;
  height: 20px;
  &:checked + ${CheckboxLabel} {
    background: ${THEMES.blue116};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      background-clip: padding-box;
      height: 20px;
      border: 2px solid transparent;
      transform: translateX(calc(100% - 4px));
      transition: all 125ms ease-in-out;
    }
  }
`;
const SwitchButton = () => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id='checkbox' type='checkbox' />
        <CheckboxLabel htmlFor='checkbox' />
      </CheckBoxWrapper>
    </div>
  )
}

export default SwitchButton