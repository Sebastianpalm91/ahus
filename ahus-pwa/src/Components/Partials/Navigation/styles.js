import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
// Navigation
export const Container = styled.header`
display: flex;
flex-direction: column;

    width: 180px;
    background-color: #E7EDF0;
    ${breakpoint.down('m')`
        display: none;`
    }
`;

export const NavItems = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 64px;
    padding-left: 16px;
    border-bottom: 0.1px solid #58789E;
    border-right: 0.1px solid #58789E;
    font-family: SceneMedium;
    font-size: 16px;
    font-weight: 500;
    color: #1c1c1c;
    text-align: left
    text-decoration: none;
    transition: all 0.3s ease;
    :nth-child(5) {
        font-size: 11px;
    }
    &.active {
        background-color: #2C3C4C;
        color: #ffffff;
    }
    &:hover {
        background-color: #5D789B;
        color: #ffffff;
    }
`;

export const Ul = styled.ul`
    margin: 0px;
    padding: 0px;
    background-color: #ffffff;

`;

export const SocialWrapper = styled.div`
    display: flex;
    :nth-child(2) {
        height: 100%;
    }
`;

export const SocialIcons = styled.img`
    display: flex;
    margin: auto;
    margin-bottom: 10px;
    height: 30px;
    width: 30px;
`;
