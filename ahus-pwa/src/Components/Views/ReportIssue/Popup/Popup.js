import React, { Component } from 'react';
import { Container, PopupInner } from './styles';

class Popup extends Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  render() {
    return (
      <Container>
        <PopupInner>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </PopupInner>
      </Container>

      <button onClick={this.togglePopup.bind(this)}></button>
      {this.state.showPopup ?
          <Popup
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
              />
          : null
      }
    );
  }
}

export default Popup;
