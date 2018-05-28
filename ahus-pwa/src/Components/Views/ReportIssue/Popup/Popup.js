import React, { Component } from 'react';
import { Container, PopupInner, Button, Title, Wrapper } from './styles';

class Popup extends Component {
  render() {
    return (
      <Container>
            <PopupInner>
              <Title>{this.props.text}</Title>
              <Button onClick={this.props.closePopup}>Stäng</Button>
            </PopupInner>
      </Container>
    );
  }
}

export default Popup;
