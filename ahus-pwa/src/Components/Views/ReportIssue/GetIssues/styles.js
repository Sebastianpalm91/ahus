import styled from "styled-components";
import { breakpoint } from '../../../../Assets/Scripts/theme/mixins';

export const Title = styled.h1`
    font-size: 28px;
    font-family: SceneLight;
    font-weight: 500;
`;

export const IssuesUl = styled.ul`
    margin-left: 35px;
    margin-right: 35px;
    list-style-type: none;
    padding-left: 0px;
`;

export const IssueList = styled.li`
    height: 80px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid black;
    ${breakpoint.down('m')`
        height: 80px;

    `}
    ${breakpoint.down('s')`
        height: 80px;

    `}
    ${breakpoint.down('xs')`

        height: 80px;
    `}
`;

export const IssuedTitle = styled.h1`
    font-size: 16px;
    ${breakpoint.down('m')`
        font-size: 12px;
    `}
`;

export const Body = styled.p`
    font-size: 14px;
    ${breakpoint.down('m')`
        font-size: 10px;
    `}
`;
