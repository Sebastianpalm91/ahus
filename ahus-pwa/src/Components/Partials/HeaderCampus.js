import React from 'react';
import { HeaderCampusContainer, HeaderText, StyledLink, Logo } from './styles';


// The Header creates links that can be used to navigate
// between routes.
const HeaderCampus = () => (
  <HeaderCampusContainer>
      <StyledLink to='/'><Logo></Logo></StyledLink>
      <HeaderText>Campus | Helsingborg</HeaderText>
  </HeaderCampusContainer>
)

export default HeaderCampus
