import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import fastighet1 from '../../../Assets/Images/Din_fastighet1.png'
import fastighet2 from '../../../Assets/Images/Din_fastighet2.png'
import fastighet3 from '../../../Assets/Images/Din_fastighet3.png'
import fastighet4 from '../../../Assets/Images/Din_fastighet4.png'


export const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`;
//
export const Wrapper = styled.div`
    width: 960px;
    margin: 50px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 700px;
    `}
    ${breakpoint.down('m')`
        width: 500px;
    `}
    ${breakpoint.down('s')`
        width: 330px;
    `}
    ${breakpoint.down('xs')`
        width: 280px;
    `}
`;

// ROW 1
export const Header = styled.header`
    width: inherit;
    height: 400px;
    position: relative;
    background-image: url(${fastighet1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeaderInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 288px;
    height: 60px;
    bottom: 20px;
    left: 0;
    padding-left: 32px;
    text-align: left;
    background-color: #58789E;
    color: #FFFFFF;
    ${breakpoint.down('m')`
        width: 120px;
        height: 40px;
        top: 20px;
        padding-left: 10px;

    `}

`;
export const HeaderText = styled.p`
    font-family: SceneLight;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    padding: 0px;
    margin: 0px;
    ${breakpoint.down('m')`
        font-size: 12px;
    `}
`;

export const HeaderTextSub = styled.p`
    font-family: ChronicleSemiBold;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 19px;
    padding: 0px;
    margin: 0px;
    ${breakpoint.down('m')`
        font-size: 10px;
    `}
`;

export const HeaderViewPicture = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 48px;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 0;

    background-color: rgba(255, 255, 255, 0.7);
    color: rgba(0,0,0,0.8);
`;
export const HeaderTextPicture = styled.p`
    font-family: SceneLight;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 20px;
    padding: 0px;
    margin: 0px;
`;

// ROW 2
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
    background-color: #E7EDF0;
    margin: 16px 8px 16px 0px;
    width: 608px;
    height: 320px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        height: unset;
        margin: 10px 0px 10px 0px;
    `}
`;
export const LeftTitle = styled.p`
    font-family: SceneMedium;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
    padding: 20px 0px 0px 20px;
    margin: 0px;
    display: inline;
`;
export const LeftTitleSub = styled.p`
    font-family: ChronicleDeckCond;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
    padding: 0px 0px 0px 20px;
    margin: 0px;
    display: inline;
`;

export const LeftText = styled.p`
    font-family: ChronicleRoman;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 23px;
    padding: 0px 20px 20px 20px;
    margin: 0px;
    display: inline;
`;

export const MainRight = styled.div`
    display: flex;
    background-color: #E7EDF0;
    margin: 16px 0px 16px 8px;
    width: 336px;
    height: 320px;
    ${breakpoint.down('m')`
        width: 100%
        margin: 10px 0px 10px 0px;
    `}
`;

export const RightText = styled.p`
    font-family: SceneMedium
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgba(0,0,0,0.8);
    line-height: 23px;
    padding: 20px;
    margin: 0px;
    display: inline;
`;

// ROW 3
export const ImageContactInside = styled.div`
    height: 320px;
    width: 304px;
    background-image: url(${fastighet2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 8px 16px 8px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        margin: 10px 0px 10px 0px;
    `}
`;

export const ImageContactBuilding = styled.div`
    height: 320px;
    width: 304px;
    background-image: url(${fastighet3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 8px 16px 0px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        margin: 10px 0px 10px 0px;
    `}

`;

export const ImageContactWrapper = styled.div`
    display: flex;
    background-color: #E7EDF0;
    margin: 0px 0px 16px 8px;
    height: 320px;
    width: 336px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        height: unset;
        margin: 10px 0px 10px 0px;
    `}
`;
export const ImageContactText = styled.p`
    font-family: SceneMedium
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgba(0,0,0,0.8);
    line-height: 23px;
    margin: 0px;
    display: inline;
    padding: 20px;
    width: 336px;
`;

export const ImageContactAnchor = styled.a`
    color: #58789E;
    transition: all 0.2s ease;
    &:hover{
        color: #95afcf;
    }
`;

// ROW 4
export const ContactFooterWrapper = styled.div`
    display: flex;
    background-color: #E7EDF0;
    margin: 0px 0px 16px 8px;
    width: 336px;
    height: 192px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        height: unset;
        margin: 10px 0px 10px 0px;
    `}
`;
export const ParkingText = styled.p`
    font-family: SceneMedium
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgba(0,0,0,0.8);
    line-height: 23px;
    margin: 0px;
    display: inline;
    padding: 20px;
`;

export const ImageContactFooter = styled.div`
    height: 192px;
    width: 608px;
    background-image: url(${fastighet4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 8px 16px 0px;
    ${breakpoint.down('xl')`
        width: 850px;
    `}
    ${breakpoint.down('l')`
        width: 600px;
    `}
    ${breakpoint.down('m')`
        width: 100%
        height: unset;
        margin: 10px 0px 10px 0px;
    `}
`;
