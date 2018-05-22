import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`;
//
export const Wrapper = styled.div`
    width: 960px;
    background: black;
    margin: 50px;
    ${breakpoint.down('xl')`
        width: 700px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 500px;
    `}
    ${breakpoint.down('s')`
        width: 400px;
    `}
    ${breakpoint.down('xs')`
        width: 300px;
    `}
`;

export const Header = styled.header`
    width: inherit;
    height: 400px;
    background: red;
    position: relative;
`;

export const HeaderInfo = styled.div `
    width: 288px;
    height: 60px;
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 0;
    background: white;
    ${breakpoint.down('m')`
        width: 120px;
        height: 40px;
        top: 20px;
    `}
`;

export const HeaderViewPicture = styled.div `
    width: 128px;
    height: 48px;
    opacity: 0.7;
    cursor: pointer;
    display: flex;
    position: absolute;
    bottom: 20px;
    right: 0;
    background: white;
`;

export const Main = styled.main`
    display: flex;
    width: 100%;
    background: white;
    flex-direction: row;
    ${breakpoint.down('m')`
        flex-direction: column;
    `}
`;


export const MainLeft = styled.div`
    display: flex;
    flex-direction: column;
    background: blue;
    padding: 10px;
`;
export const LeftTitle = styled.p`
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
    padding: 20px 0px 0px 20px;
    margin: 0px;
    display: inline;
`;
export const LeftTitleSub = styled.p`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
    padding: 0px 0px 0px 20px;
    margin: 0px;
    display: inline;
`;

export const LeftText = styled.p`
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 23px;
    padding: 10px 20px 20px 20px;
    margin: 0px;
    display: inline
`;

export const MainRight = styled.div`
    display: flex;
    background: blue;
    padding: 10px;
`;

export const RightText = styled.p`
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 23px;
    padding: 20px;
    margin: 0px;
    display: inline;
`;
