import React, { Component } from 'react';
import { Li, StyledLink, Logo, MenuWrapper, Ul, Select, Option, SelectWrapper } from './styles';
import { stack as Menu } from 'react-burger-menu'
import HeaderCampus from '../../Partials/Header/HeaderCampus';
import axios from 'axios';

class Hamburger extends Component {
    constructor(props){
        super(props);
    }
    state = {
        campuses: []
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/campus`)
            .then(res => {
                const campuses = res.data.campus;
                this.setState({ campuses });
            })
    }
    render() {
        return(
            <MenuWrapper>
                <Menu isOpen={ false } styles={ styles } right>
                    <Logo></Logo>
                    <Ul>
                        <Li><StyledLink className="menu-item" to='/' alt="Hem">Hem</StyledLink></Li>
                        <Li><StyledLink className="menu-item" to='/felanmalan'>Felanmälan</StyledLink></Li>
                        <Li><StyledLink className="menu-item" to='/nyheter'>Nyheter</StyledLink></Li>
                        <Li><StyledLink className="menu-item" to='/kontakt'>Kontakt</StyledLink></Li>
                        <Li><StyledLink className="menu-item" to='/dinfastiget'>Din Fastighet</StyledLink></Li>
                        <Li>
                            <SelectWrapper>
                                <Select onChange={this.props.changeCampus}>
                                    <Option>Välj campus här</Option>
                                    {this.state.campuses.map(campus =>
                                        <Option key={campus.id} id={campus.id} data-long={campus.longitude} data-lat={campus.latitude}>{campus.name} | {campus.city.name} </Option>
                                    )}
                                </Select>
                            </SelectWrapper>
                        </Li>
                    </Ul>
                </Menu>
            </MenuWrapper>
        )
    }
}
var styles = {

    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '25px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
        bmCrossButton: {
        height: '44px',
        width: '44px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#373a47',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        marginTop: '50px'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
}
export default Hamburger
