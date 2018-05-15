import React, { Component } from 'react';
import './Assets/Styles/Public/App.css';
import Header from './Components/Partials/Header';
import Navigation from './Components/Partials/Navigation';
import Main from './Components/Main/Main';
import Hamburger from './Components/Menu/Mobile/Hamburger';
import styled from "styled-components";

class App extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <Hamburger></Hamburger>
                <MainContainer>
                    <Navigation></Navigation>
                    <Main></Main>
                </MainContainer>
        </div>
    );
  }
}

const MainContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
`

export default App;
