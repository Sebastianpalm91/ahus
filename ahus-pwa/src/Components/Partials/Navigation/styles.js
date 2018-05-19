import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
// Navigation
export const Container = styled.header`
    height: 100vh;
    width: 160px;
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
    text-align: left
    border-bottom: 0.1px solid #58789E;
    border-right: 0.1px solid #58789E;
    font-size: 1em;
    color: #1c1c1c;
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
        background-color: #2C3C4C;
        color: #ffffff;
    }
`;

export const Ul = styled.ul`
    margin: 0px;
    padding: 0px;
    background-color: #ffffff;
`;
