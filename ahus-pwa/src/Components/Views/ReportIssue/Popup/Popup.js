import React, { Component } from 'react';
import { Container, PopupInner } from './styles';

class Popup extends Component {
  render() {
    return (
      <Container>
        <PopupInner>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </PopupInner>
      </Container>
    );
  }
}

export default Popup;
