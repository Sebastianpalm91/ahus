import React from 'react';
import { Li, StyledLink, Logo, MenuWrapper, Ul } from './styles';
import { stack as Menu } from 'react-burger-menu'
const Hamburger = () => (
    <MenuWrapper>
        <Menu isOpen={ false } styles={ styles } right>
            <Logo></Logo>
            <Ul>
                <Li><StyledLink className="menu-item" to='/' alt="Hem">Hem</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/felanmalan'>Felanmälan</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/nyheter'>Nyheter</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/kontakt'>Kontakt</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/dinfastiget'>Din Fastighet</StyledLink></Li>
            </Ul>
        </Menu>
    </MenuWrapper>
)
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '44px',
    width: '44px'
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
