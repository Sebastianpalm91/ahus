import styled from "styled-components";
import { Link } from 'react-router-dom'
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Li = styled.li`
    padding: 20px;
    list-style: none;
    justify-content: center;
`;
export const Ul = styled.ul`
    padding: 0px;
    margin: 0px;
    margin-top: 50px;
    list-style: none;
`;

export const StyledLink = styled(Link)`
    font-size: 1em;
    color: white;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;
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

export const MenuWrapper = styled.div`
    ${breakpoint.up('m')`
        display: none;`
    }
`;
