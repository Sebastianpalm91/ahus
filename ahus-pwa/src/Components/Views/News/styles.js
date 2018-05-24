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
    flex-wrap: wrap;
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
export const ItemDate = styled.div `
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: center
    align-items: center;
    position: absolute;
    top: 20px;
    left: 0;
    background-color: #283C4E;
`;
export const DateText = styled.p`
    height: 23px;
    font-family: SceneLight;
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.14px;
    line-height: 23px;
    color: #FFFFFF;
    margin: 0px;
    padding-left: 13px;
    padding-top: 3px;
`;
export const ItemFooter = styled.div `
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 15px;
`;

export const NewsTitle = styled.h3`
    font-family: SceneMedium;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 23px;
    color: rgba(0,0,0,0.8);
    margin: 0px;
`;

export const NewsAuthor = styled.p`
    font-family: SceneLight;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.15px;
    line-height: 23px;
    color: rgba(0,0,0,0.8);
    margin: 0px;
`;
export const ContextImage = styled.div`
    height: 30px;
    width: 30px;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 16px;
`;
