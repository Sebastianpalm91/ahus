import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const HomeContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

// export const HomeTextContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: 96px;
//     background-color: #E7EDF0;
//     ${breakpoint.down('m')`
//         height: 78px;
//     `}
//     ${breakpoint.down('s')`
//         height: 78px;
//     `}
//     ${breakpoint.down('xs')`
//         height: 78px;
//     `}
// `;

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    margin-top: 45px;
    height: 368px;
    border-radius: 5px;
    background-color: #F2F1EA;
    ${breakpoint.down('s')`
        width: 330px;
    `}
    ${breakpoint.down('xs')`
        width: 280px;
    `}
`;

export const HomeContainerText = styled.div`
    display: inline-block;
    height: 350px;
    width: 576px;
    border-radius: 5px;
    background-color: #686868;
    ${breakpoint.down('s')`
        width: 320px;
    `}
    ${breakpoint.down('xs')`
        width: 280px;
    `}
`;

export const HomeWrapperText = styled.div`
    display: flex;
    flex-direction: row;
`;


export const HomeTitle = styled.h1`
    text-align: left;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    margin: 0px;
    padding: 16px;
`;

export const HomeTitleSub = styled.h4`
    height: 18px;
    width: 160px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    margin: 0px;
    padding: 0px 16px 0px 16px;
`;

export const HomeText = styled.p`
    width: 272px;
    height: 182px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 20px;
    margin: 0px;
    padding: 16px;
    ${breakpoint.down('s')`
        :nth-child(2) {
            display: none;
        }
    `}
`;

// BUTTON STYLE

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top 20px;
`;

export const ButtonCity = styled.button`
    width: 80px;
    height: 40px;
    font-size: 11px;
    border-radius: 5px;
    margin: 15px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);
    ${breakpoint.down('m')`
        height: 50px;
        width: 150px;
    `}
    ${breakpoint.down('s')`
        height: 40px;
        width: 100px;
        font-size: 18px;
    `}
`;

export const ButtonCampus = styled.button`
    width: 80px;
    height: 40px;
    font-size: 11px;
    border-radius: 5px;
    margin: 15px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);
    ${breakpoint.down('m')`
        height: 50px;
        width: 150px;
    `}
    ${breakpoint.down('s')`
        height: 40px;
        width: 100px;
        font-size: 18px;
    `}
`;
