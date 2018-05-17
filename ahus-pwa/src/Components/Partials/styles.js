import styled from "styled-components";
import { Link } from 'react-router-dom'
import { breakpoint } from '../../Assets/Scripts/theme/mixins';
// Navigation
export const NavigationContainer = styled.header`
    height: 100vh;
    width: 160px;
    background-color: #E7EDF0;
    ${breakpoint.down('m')`
        display: none;`
    }
`;

export const Li = styled.li`
    padding: 20px;
    list-style: none;
    justify-content: center;
    border-bottom: 0.1px solid #58789E;
    border-right: 0.1px solid #58789E;
`;

export const StyledLink = styled(Link)`
    font-size: 1em;
    color: #1c1c1c;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;
export const StyledLinkAdmin = styled(Link)`
    font-size: 1em;
    color: #1c1c1c;
    padding: 48px;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;

export const Ul = styled.ul`
    margin: 0px;
    padding: 0px;
    background-color: #ffffff;
`;

// export const LogoWrapper = styled.div`
//     width: 100%;
//     height:
// `;

export const Logo = styled.img`
    display: flex;
    margin: auto;
    padding: 48px;
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
    justify-content: space-between;
    width: 100%;
    height: 48px;
    top: 0;
    background-color: #58789E;
    ${breakpoint.down('m')`
        display: none;
    `}
`;

export const HeaderText = styled.h1`
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 19px;
    margin: 0px;
    padding: 48px;
    ${breakpoint.down('m')`
        :nth-child(2) {
            display: none;
        }
    `}
`;

// HEADER CAMPUS
export const HeaderCampusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 96px;
    background-color: #E7EDF0;

    ${breakpoint.down('m')`
        height: 78px;
        justify-content: center;
    `}
    ${breakpoint.down('s')`
        height: 78px;
    `}
    ${breakpoint.down('xs')`
        height: 78px;
    `}
`;
