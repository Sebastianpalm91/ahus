import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import bg from '../../../Assets/Images/homescreen.png'

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

// export const TextContainer = styled.div`
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

export const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${breakpoint.down('s')`
        padding: 20px;
    `}
    ${breakpoint.down('xs')`
        padding: 10px;
    `}
`;

export const ContainerText = styled.div`
    display: inline-block;
    width: 576px;
`;

export const WrapperText = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Title = styled.h1`
    text-align: left;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    margin: 0px;
    padding: 16px;
`;

export const TitleSub = styled.h4`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    margin: 0px;
    padding: 0px 16px 0px 16px;
`;

export const Text = styled.p`
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

// export const ButtonWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-top 20px;
// `;

// export const ButtonCity = styled.button`
//     width: 80px;
//     height: 40px;
//     font-size: 11px;
//     border-radius: 5px;
//     margin: 15px;
//     border: none;
//     outline: none;
//     ${breakpoint.down('m')`
//         height: 50px;
//         width: 150px;
//     `}
//     ${breakpoint.down('s')`
//         height: 40px;
//         width: 100px;
//         font-size: 18px;
//     `}
// `;
//
// export const ButtonCampus = styled.button`
//     width: 80px;
//     height: 40px;
//     font-size: 11px;
//     border-radius: 5px;
//     margin: 15px;
//     border: none;
//     outline: none;
//
//     ${breakpoint.down('m')`
//         height: 50px;
//         width: 150px;
//     `}
//     ${breakpoint.down('s')`
//         height: 40px;
//         width: 100px;
//         font-size: 18px;
//     `}
// `;
