import styled from "styled-components";
import { Link } from 'react-router-dom'
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import logo from '../../../Assets/Images/Logga192x192.svg'
import arrow from '../../../Assets/Images/Arrow-down-white.svg'

export const Li = styled.li`
    padding: 20px;
    list-style: none;
    justify-content: center;
`;
export const Ul = styled.ul`
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
    list-style: none;
`;

export const StyledLink = styled(Link)`
    font-family: SceneMedium;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    &:hover {
        color: black;
    }
`;
export const Logo = styled.div`
    display: flex;
    margin: auto;
    padding: 23px 0px 23px 0px;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 64px;
    margin-top: 30px;
`;

export const MenuWrapper = styled.div`
    ${breakpoint.up('m')`
        display: none;`
    }
`;

// SELECT CAMPUS IN HAMBURGER

export const SelectWrapper = styled.div`
    ${breakpoint.up('m')`
        display: none;
    `}
`;

export const Select = styled.select`
    width: 260px;
    font-family: SceneMedium;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #ffffff;
    border: none;
    background-color: unset;
    outline: none;
    appearance: none;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    background-position-x: 220px;
    cursor: pointer;
`;
export const Option = styled.option`

`;
