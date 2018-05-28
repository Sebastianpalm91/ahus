import styled from "styled-components";
import { breakpoint } from '../../../../Assets/Scripts/theme/mixins';

export const Title = styled.h1`
    font-size: 28px;
    font-family: SceneLight;
    font-weight: 500;
    margin: 10px;
    margin-left: 45px;
    margin-right: 45px;
    ${breakpoint.down('l')`
        width: 350px;
        margin: 0 auto;
    `}
    ${breakpoint.down('s')`
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 10px;
        width: auto;
    `}
`;

export const IssuesUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
    list-style-type: none;
    padding-left: 0px;
    margin-top: 40px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const IssueList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid rgba(207, 207, 207, 0.22);
    box-shadow: -3px 7px rgba(190, 190, 190, 0.2);
    width: 350px;
    opacity: 0.8;
`;

export const IssuedTitle = styled.h1`
    display: flex;
    flex-direction: row;
    font-family: ChronicleSemiBold;
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
    padding: 5px;
`;

export const Body = styled.p`
    font-family: SceneLight;
    font-weight: 600;
    font-size: 14px;
    margin: 0px;
    padding: 5px;
`;

export const DateText = styled.p`
    font-family: SceneLight;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 20px;
    padding: 0px;
    margin: 0px;
    padding-left: 6px;
    color: rgba(184, 182, 182, 0.8)

`;
