import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/navState';

const MenuButton = styled.button`
  
  display: block;  
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  margin-top: 15px;
  outline: 0;
  border: 0;  
  background: none;
  z-index: 502;  

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    
  }

  :hover {
    span:nth-of-type(1) {
      width: 20px;
    }

    span:nth-of-type(2) {
      width: 36px;
    }

    span:nth-of-type(3) {
      width: 20px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(7px, 7px);
      width: 36px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 36px;
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 36px;
  height: 4px;
  margin-bottom: 6px;
  background-color: #070707;
  opacity: 0.6;
`;

const HamburgerButton = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <MenuButton
            className={isMenuOpen ? 'active' : ''}
            aria-label="Открыть меню"
            onClick={clickHandler}
        >
            <Bar />
            <Bar />
            <Bar />
        </MenuButton>
    );
};

export default HamburgerButton;