import React, { Component } from 'react';
import './Assets/Styles/Public/App.css';
import Header from './Components/Partials/Header/Header'; // Main Header
import Footer from './Components/Partials/Footer/Footer'; // Main Header
import HeaderCampus from './Components/Partials//Header/HeaderCampus'; // Campus Header Location
import Navigation from './Components/Partials/Navigation/Navigation';
import Main from './Components/Main/Main'; // Routing
import Hamburger from './Components/Menu/Mobile/Hamburger'; // Mobile Menu
import { MainContainer } from './Assets/Styles/Src/App.js';
import axios from 'axios';

class App extends Component {
    state = {
        current_campus: {
            id: '',
            long: '',
            lat: ''
        },
    }

    changeCampus(event) {
        this.setState({
            current_campus: {
                id: event.target.options[event.target.selectedIndex].getAttribute('id'),
                lat: event.target.options[event.target.selectedIndex].dataset['lat'],
                long: event.target.options[event.target.selectedIndex].dataset['long'],
            }
        })
    }

    async componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 1500);
        const res = await axios.get(`http://127.0.0.1:8000/api/campus`)
            .then(res => {
                const campuses = res.data.campus[0];
                this.setState({
                    current_campus: {
                        id: campuses.id,
                        long: campuses.longitude,
                        lat: campuses.latitude
                    }
                });
            })
    }

    hasValues([...data]){
        data.forEach(element => {
            if(element === '') return false
        });
        return true
    }

  render() {
    return (
        <div>
            <Header></Header>
            <Hamburger></Hamburger>
            <HeaderCampus changeCampus={this.changeCampus.bind(this)}></HeaderCampus>
                <MainContainer>
                    <Navigation></Navigation>
                    <Main current_campus={ this.hasValues(this.state.current_campus) ? this.state.current_campus : {id: 1, lat: 57.7, long: 12}} />
                </MainContainer>
                <Footer></Footer>
        </div>
    );
  }
}

export default App;
