import React from 'react';
import { Container, Ul, NavItems, SocialIcons, SocialWrapper } from './styles';
import Twitter from '../../../Assets/Images/Twitter.svg'
import GooglePlus from '../../../Assets/Images/Google-plus.svg'
import Facebook from '../../../Assets/Images/Facebook.svg'

const Navigation = () => (
    <Container>
            <Ul>
                <NavItems activeClassName="active" to='/felanmalan'>FELANMÄLAN</NavItems>
                <NavItems activeClassName="active" to='/nyheter'>NYHETER</NavItems>
                <NavItems activeClassName="active" to='/kontakt'>KONTAKT</NavItems>
                <NavItems activeClassName="active" to='/dinfastiget'>DIN FASTIGHET</NavItems>
                <NavItems activeClassName="active" to='/akademiskahus'>Akademiskahus.se</NavItems>
            </Ul>
            <SocialWrapper>
                <SocialIcons src={Twitter}></SocialIcons>
                <SocialIcons src={GooglePlus}></SocialIcons>
                <SocialIcons src={Facebook}></SocialIcons>
            </SocialWrapper>
    </Container>
)

export default Navigation;
