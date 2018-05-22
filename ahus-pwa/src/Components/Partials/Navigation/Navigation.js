import React from 'react';
import { Container, Ul, Li, NavItems, Logo } from './styles';

const Navigation = () => (

    <Container>
            <Ul>
                <NavItems activeClassName="active" to='/felanmalan'>Felanmälan</NavItems>
                <NavItems activeClassName="active" to='/nyheter'>Nyheter</NavItems>
                <NavItems activeClassName="active" to='/kontakt'>Kontakt</NavItems>
                <NavItems activeClassName="active" to='/dinfastiget'>Din Fastighet</NavItems>
                <NavItems activeClassName="active" to='/akademiskahus'>Akademiskahus.se</NavItems>
            </Ul>
    </Container>

)

export default Navigation;
