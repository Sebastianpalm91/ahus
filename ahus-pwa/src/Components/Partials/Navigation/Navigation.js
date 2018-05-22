import React from 'react';
import { Container, Ul, Li, NavItems, Logo } from './styles';

const Navigation = () => (

    <Container>
            <Ul>
                <NavItems activeClassName="active" to='/felanmalan'>FELANMÄLAN</NavItems>
                <NavItems activeClassName="active" to='/nyheter'>NYHETER</NavItems>
                <NavItems activeClassName="active" to='/kontakt'>KONTAKT</NavItems>
                <NavItems activeClassName="active" to='/dinfastiget'>DIN FASTIGHET</NavItems>
                <NavItems activeClassName="active" to='/akademiskahus'>Akademiskahus.se</NavItems>
            </Ul>
    </Container>

)

export default Navigation;
