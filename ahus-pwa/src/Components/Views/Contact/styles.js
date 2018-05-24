import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import bg from '../../../Assets/Images/newsscreen.png'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 100%;
`
export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 60px;
`

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 100px;
    display: inline;
    width: 565px;
    ${breakpoint.down('xl')`
        margin: 15px;
        margin: auto;
        justify-content: center;
    `}
    ${breakpoint.down('m')`
    margin: 15px;
    width: unset;
        justify-content: center;
    `}
`;

export const Header = styled.h1`
    font-family: SceneMedium;
    font-size: 28px;
    letter-spacing: 0.2px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
`;
export const HeaderText = styled.p`
    font-family: ChronicleRoman;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 20px;
    color: rgba(0,0,0,0.8);
`;
export const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Items = styled.div`
    display: flex;
    width: 416px;
    height: 96px;
    background-color: #ffffff;
    padding: 15px;
    margin: 10px 5px 10px 55px;
    ${breakpoint.down('l')`
        margin-top: 55px
    `}
    ${breakpoint.down('m')`
        margin-top: 55px
        width: 350px
    `}
    ${breakpoint.down('s')`
        width: 280px
    `}
    ${breakpoint.down('xs')`
        width: 250px
    `}
`;

export const ContactInfo = styled.div`
    padding: 13px;

`;
export const ContactTitle = styled.h4`
    font-family: SceneMedium;
    color: rgba(0,0,0,0.8);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.16px;
    line-height: 14px;
    padding: 0px;
    margin: 0px;
`;

export const ContactText = styled.p`
	color: rgba(0,0,0,0.8);
    font-family: SceneLight;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.16px;
    line-height: 14px;
    padding: 3px 0px 0px 0px;
    margin: 0px;
`;
export const ContactPicture = styled.div`
    height: 92px;
    width: 90px;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
