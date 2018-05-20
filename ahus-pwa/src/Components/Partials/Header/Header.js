import React from 'react';
import { HeaderContainer, Text, StyledLinkAdmin } from './styles';
import SimpleLineIcon from 'react-simple-line-icons';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <HeaderContainer>
      <Text>Akademiska Hus WebbApp</Text>
          <StyledLinkAdmin to='/admin/login'>Login<SimpleLineIcon name="login"/></StyledLinkAdmin>
  </HeaderContainer>
)

export default Header
