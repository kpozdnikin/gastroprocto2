import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});

const NavState = (props: any) => {
    const { children } = props;
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider
          value={{ isMenuOpen, toggleMenu: toggleMenuMode }}
        >
            {children}
        </MenuContext.Provider>
    );
};

NavState.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NavState;
