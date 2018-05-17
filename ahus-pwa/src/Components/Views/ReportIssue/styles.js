import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`



export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 96px;
    background-color: #E7EDF0;
    ${breakpoint.down('m')`
        justify-content: center;
        height: 78px;
    `}
    ${breakpoint.down('s')`
        height: 78px;
    `}
    ${breakpoint.down('xs')`
        height: 78px;
    `}
`;


// INPUT/FORM STYLE
//
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E7E6;
    margin: 0 auto;
    padding: 5px;
    border-radius: 5px;
    margin-top: 20px;
`;

export const InputFields = styled.input`
    width: 400px;
    height: 20px;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);

    ${breakpoint.down('m')`
        width: 350px;
        height: 50px;
    `}
    ${breakpoint.down('s')`
        width: 330px;
        height: 40px;
    `}
    ${breakpoint.down('xs')`
        width: 260px;
        height: 30px;
    `}
`;

export const InputTextArea = styled.textarea`
    width: 400px;
    height: 150px;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);

    ${breakpoint.down('m')`
        height: 80px;
        width: 350px;
    `}
    ${breakpoint.down('s')`
        height: 80px;
        width: 330px;
    `}
    ${breakpoint.down('xs')`
        width: 260px;
        height: 80px;
    `}
`;

export const SubmitButton = styled.button`
    width: 80px;
    height: 40px;
    font-size: 11px;
    border-radius: 5px;
    margin: 15px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);
    ${breakpoint.down('m')`
        height: 80px;
    `}
    ${breakpoint.down('s')`
        height: 40px;
        width: 100px;
        font-size: 18px;
    `}
`;
export const IssueContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;
export const IssuesUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
`;

export const IssueList = styled.li`
    height: 80px;
    width: 550px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid black;
    ${breakpoint.down('m')`
        height: 80px;
        width: 350px;
    `}
    ${breakpoint.down('s')`
        height: 80px;
        width: 330px;
    `}
    ${breakpoint.down('xs')`
        width: 280px;
        height: 80px;
    `}
`;

export const Title = styled.h1`
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
