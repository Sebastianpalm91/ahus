import styled from "styled-components";
import { Link } from 'react-router-dom'
import { breakpoint } from '../../Assets/Scripts/theme/mixins';
// Navigation
export const NavigationContainer = styled.header`
    height: 100vh;
    width: 160px;
    background-color: #e37979;
    ${breakpoint.down('m')`
        display: none;`
    }
`;

export const Li = styled.li`
    padding: 20px;
    list-style: none;
    justify-content: center;
    border-bottom: 1px solid #dadada;
`;

export const StyledLink = styled(Link)`
    font-size: 1em;
    color: white;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;

export const Ul = styled.ul`
    margin: 0px;
    padding: 0px;
    background-color: #b8b8b8;
`;

// export const LogoWrapper = styled.div`
//     width: 100%;
//     height:
// `;

export const Logo = styled.img`
    display: flex;
    margin: auto;
    padding: 23px 0px 23px 0px;
    background-image: url('../Images/logo.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 64px;
`;

// Header
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    top: 0;
    background-color: #B6B6B6;
    ${breakpoint.down('m')`
        display: none;
    `}
`;

export const HeaderText = styled.h1`
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 19px;
    margin: 0px;
    padding-left: 16px;
`;
