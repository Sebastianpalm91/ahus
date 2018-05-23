import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import { Link } from 'react-router-dom'
import logo from '../../../Assets/Images/Logga192x192.svg'
import SimpleLineIcon from 'react-simple-line-icons';



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

export const Text = styled.h1`
    font-family: ChronicSemiBold;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 19px;
    margin: 0px;
    padding: 0px 20px 0px 20px;
    ${breakpoint.down('m')`
        :nth-child(2) {
            display: none;
        }
    `}
`;

export const SelectWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    ${breakpoint.down('m')`
        display: none;
    `}
`;


export const Select = styled.select`
    width: 320px;
    font-family: SceneMedium;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    text-align: right;
    color: rgba(0,0,0,0.8);
    border: none;
    background-color: unset;
    margin: 0px 0px 0px 35px;
    appearance: none;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 296px;
`;

export const Option = styled.option`

`;

export const StyledLinkAdmin = styled(Link)`
    display: flex;
    flex-direction: row;
    font-size: 1em;
    color: #ffffff;
    padding: 0px 20px 0px 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        color: #2C3C4C;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1em;
    color: #1c1c1c;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 0px
    &:hover {
        opacity: 0.5;
    }
`;
// HEADER CAMPUS
export const CampusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
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

export const Logo = styled.div`
    display: flex;
    margin: auto;
    margin: 0px 48px 0px 48px;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 50px;
    width: 64px;
`;
