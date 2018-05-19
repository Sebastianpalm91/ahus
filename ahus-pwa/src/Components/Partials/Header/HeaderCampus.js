import React from 'react';
import { CampusContainer, Text, StyledLink, Logo } from './styles';


// The Header creates links that can be used to navigate
// between routes.
const HeaderCampus = () => (
  <CampusContainer>
      <StyledLink to='/'><Logo></Logo></StyledLink>
      <Text>Campus | Helsingborg</Text>
  </CampusContainer>
)

export default HeaderCampus
