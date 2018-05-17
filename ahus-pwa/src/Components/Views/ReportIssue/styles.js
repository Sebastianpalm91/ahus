import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const TitleNavigation = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  line-height: 30px;
  margin: 0px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: #4D4D4D;
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
    height: 80px;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);

    ${breakpoint.down('m')`
        width: 350px;
        height: 100px;
    `}
    ${breakpoint.down('s')`
        width: 250px;
        height: 110px;
    `}
`;

export const InputTextArea = styled.textarea`
    width: 400px;
    height: 250px;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 10px;
    border: none;
    outline: none;
    background-color: rgba(62,62,62,0.3);

    ${breakpoint.down('m')`
        height: 350px;
        width: 350px;
    `}
    ${breakpoint.down('s')`
        height: 450px;
        width: 250px;
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
        height: 130px;
    `}
    ${breakpoint.down('s')`
        height: 230px;
    `}
`;
export const IssueContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;
export const IssuesUl = styled.ul`
    list-style-type: none;
    padding: 20px;
`;

export const IssueList = styled.li`
    height: 80px;
    width: 450px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid black;
    ${breakpoint.down('l')`
        width: 350px;
    `}
    ${breakpoint.down('s')`
        width: 250px;
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
