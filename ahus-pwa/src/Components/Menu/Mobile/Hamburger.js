import React, { Component } from 'react';
import { Li, StyledLink, Logo, MenuWrapper, Ul, Select, Option, SelectWrapper, Back, Burger } from './styles';
import { stack as Menu } from 'react-burger-menu'
import axios from 'axios';
import burger from './img/burgericon.svg'

class Hamburger extends Component {
    // constructor(props){
    //     super(props);
    // }
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
                <Menu
                    isOpen={ false }
                    styles={ styles }
                    right
                    burgerButtonClassName={ "bmIcon" }
                    customBurgerIcon={ <Burger src={`${burger}`}></Burger> }>
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
                                    <Option>Välj campus här...</Option>
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
        width: '55px',
        height: '55px',
        right: '45px',
        bottom: '9%',
    },
    bmBurgerBars: {
        background: '#84c443'
    },
        bmCrossButton: {
        height: '55px',
        width: '55px',
        right: '60px',
        bottom: '7%',
        top: 'unset',
    },
    bmCross: {
        background: '#84c443',
        height: '35px',
        width: '9px'
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
