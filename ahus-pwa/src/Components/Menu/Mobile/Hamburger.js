import React from 'react';
import { Li, StyledLink, Logo } from './styles';
import { bubble as Menu } from 'react-burger-menu'
const Hamburger = () => (
    <Menu styles={ styles } right>
        <StyledLink to='/'><Logo></Logo></StyledLink>
                <Li><StyledLink className="menu-item" to='/felanmalan'>Felanmälan</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/nyheter'>Nyheter</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/kontakt'>Kontakt</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/dinfastiget'>Din Fastighet</StyledLink></Li>
    </Menu>
)
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
export default Hamburger
