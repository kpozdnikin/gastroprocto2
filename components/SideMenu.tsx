import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { MenuContext } from './NavState';

interface MenuProps {
    open: boolean;
}

const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 220px;  
  margin-top: 0px;
  padding-top: 125px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #B3DDC6;  
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${(props: MenuProps) => props.open && css`transform: translateX(0);`}`;

export const MenuLink = styled.div`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  color: #070707;
  font-size: 16px;
  line-height: 120%;
  font-weight: 500;
`;

export const SideMenu = (props: any) => {
    const { children } = props;
    const { isMenuOpen } = useContext(MenuContext);
    return (
        <Menu
            open={isMenuOpen}
        >
            {children}
        </Menu>
    );
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
            <MenuLink><Link href='/'><a>Главная</a></Link></MenuLink>
            <MenuLink><Link href="/blog"><a>Мой блог</a></Link></MenuLink>
            <MenuLink><Link href="/stomachache"><a>О боли в животе</a></Link></MenuLink>
            <MenuLink><Link href="/illnesses"><a>Заболевания ЖКТ</a></Link></MenuLink>
        </>
    ),
};