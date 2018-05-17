import React from 'react';
import { HeaderContainer, HeaderText, StyledLinkAdmin } from './styles';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <HeaderContainer>
      <HeaderText>Akademiska Hus WebbApp</HeaderText>
          <StyledLinkAdmin to='/admin/login'>Admin Login</StyledLinkAdmin>
  </HeaderContainer>
)

export default Header
