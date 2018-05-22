import React, { Component } from 'react';
import './Assets/Styles/Public/App.css';
import Header from './Components/Partials/Header/Header'; // Main Header
import Footer from './Components/Partials/Footer/Footer'; // Main Header
import HeaderCampus from './Components/Partials//Header/HeaderCampus'; // Campus Header Location
import Navigation from './Components/Partials/Navigation/Navigation';
import Main from './Components/Main/Main'; // Routing
import Hamburger from './Components/Menu/Mobile/Hamburger'; // Mobile Menu
import styled from "styled-components";
import { MainContainer } from './Assets/Styles/Src/App.js';

class App extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <Hamburger></Hamburger>
            <HeaderCampus></HeaderCampus>
                <MainContainer>
                    <Navigation></Navigation>
                    <Main />
                </MainContainer>
                <Footer></Footer>
        </div>
    );
  }
}

export default App;
