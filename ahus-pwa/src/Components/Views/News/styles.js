import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import bg from '../../../Assets/Images/newsscreen.png'

export const Container = styled.div `
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
`;
export const Wrapper = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0 auto;
    padding: 10px;
    ${breakpoint.down('xl')`
        flex-direction: column;
        margin: 0 auto;
        height: unset;
        width: unset;
    `}
`;

export const Items = styled.div `
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 480px;
    height: 240px;
    display: flex;
    position: relative;
    margin: 10px;
    ${breakpoint.down('l')`
        width: 450px;
    `}
    ${breakpoint.down('s')`
        width: 320px;
    `}
    ${breakpoint.down('xs')`
        width: 280px;
    `}

`;
export const ItemFooter = styled.div `
    width: 100%;
    height: 70px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
`;

export const ItemDate = styled.div `
    width: 90px;
    height: 30px;
    display: flex;
    position: absolute;
    top: 20px;
    left: 0;
    background: white;
`;
