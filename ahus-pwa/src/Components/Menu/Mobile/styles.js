import styled from "styled-components";
import { Link } from 'react-router-dom'

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
