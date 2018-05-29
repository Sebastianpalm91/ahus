import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import bg from '../../../Assets/Images/homescreen.jpg'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 50px;
    ${breakpoint.down('xl')`
        margin: 0px;
    `}
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    ${breakpoint.down('l')`
        flex-direction: column;
    `}
`;
export const MapWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    padding: 10px;
    ${breakpoint.down('xl')`
        height: 600px;
        padding: 0px;
        margin-top: 60px;
        margin-bottom: 60px;
    `}
    ${breakpoint.down('s')`
        height: 400px;
    `}
`;

export const ContainerText = styled.div`
    display: inline-block;
    width: 576px;
    ${breakpoint.down('m')`
        padding: 5px;
    `}
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
    ${breakpoint.down('s')`
        padding: 16px 0px 0px 0px;
    `}
`;

export const TitleSub = styled.h4`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    margin: 0px;
    padding: 0px 16px 0px 16px;
    ${breakpoint.down('s')`
        padding: 16px 0px 10px 0px;
    `}
    ${breakpoint.down('xs')`
        padding: 10px 0px 8px 0px;
    `}
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
        padding: 16px 0px 10px 0px;
    `}
    ${breakpoint.down('xs')`
        :nth-child(2) {
            display: none;
        }
        padding: 10px 0px 8px 0px;

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
