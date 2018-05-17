import React from 'react';
import { NavigationContainer, Ul, Li, StyledLink, Logo } from './styles';

const Navigation = () => (

    <NavigationContainer>
            <Ul>
                <Li><StyledLink className="menu-item" to='/felanmalan'>Felanmälan</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/nyheter'>Nyheter</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/kontakt'>Kontakt</StyledLink></Li>
                <Li><StyledLink className="menu-item" to='/dinfastiget'>Din Fastighet</StyledLink></Li>
            </Ul>
    </NavigationContainer>

)

export default Navigation
