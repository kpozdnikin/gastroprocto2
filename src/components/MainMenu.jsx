import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../hooks/onClickOutside';
import { MenuContext } from '../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`
  display: flex; 
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;  
  margin: 0px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;  
  z-index: 500;
`;

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <div ref={node}>
            <Navbar>
                <HamburgerButton />
            </Navbar>
            <SideMenu />
        </div>
    );
};

export default MainMenu;