import styled from "styled-components";
import { breakpoint } from '../../../../Assets/Scripts/theme/mixins';


export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`;


export const PopupInner = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
    ${breakpoint.down('l')`
        left: 10%;
        right: 10%;
    `}
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    width: 128px;
    height: 32px;
    font-family: SceneMedium
    font-size: 11px;
    border-radius: 5px;
    margin: auto;
    margin-top: 10px;
    border: none;
    outline: none;
    background-color: #6EC81E;
    color: #FFFFFF;
    margin-top: 50px;
    cursor: pointer;
    ${breakpoint.down('m')`
        font-size: 18px;
        width: 168px;
        height: 52px;
    `}
`;
export const Title = styled.h1`
    margin-top: 110px
    text-align: center;
    font-family: SceneMedium;
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
`;
