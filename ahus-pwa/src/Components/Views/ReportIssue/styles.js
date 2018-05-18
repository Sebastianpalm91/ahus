import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';
import bg from '../../../Assets/Images/Forvaltning_13_AB_2014.png';

export const Container = styled.div `
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url(${bg});
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div `
    display: flex;
    flex-direction: flex-end;
    flex-direction: column;
    margin: 0 auto;
    ${breakpoint.down('m')`
            margin: unset;
    `}
`;


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
    flex-direction: row;
    background-color: #ffffff;
    justify-content: center;
    padding: 5px;
    margin: 32px 15px 15px 15px;
    ${breakpoint.down('l')`
        flex-direction: column;
    `}
`;

export const InputFields = styled.input`
    width: 400px;
    height: 20px;
    font-size: 16px;
    margin-top: 13px;
    padding: 10px 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.8);
    outline: none;
    :nth-child(1) {
        margin-top: 0px;
    }
    ${breakpoint.down('m')`
        height: 50px;
        width: inherit;
    `}
    ${breakpoint.down('s')`
        height: 40px;
    `}
    ${breakpoint.down('xs')`
        height: 30px;
    `}
`;

export const Label = styled.label`
    height: 16px;
    width: 48px;
    background-color: #E9E9E9;
    border-radius: 2px;
    font-size: 8px;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 3px 3px 5px 0 rgba(0,0,0,0.5);
    input[type="file"] {
        display: none;
    }
`;
export const InputType = styled.input`
    height: 20px;
    font-size: 6px;
    margin-top: 13px;
    outline: none;
    :nth-child(1) {
        margin-top: 0px;
    }
`;
export const InputTitle = styled.h5`
    font-size: 11px;
    color: rgba(0,0,0,0.8);
    letter-spacing: 0.14px;
    line-height: 20px;
    margin: 27px 0px 0px 0px;
    ${breakpoint.down('l')`
        margin: 0px;
    `}
`;


export const InputTextArea = styled.textarea`
    width: 400px;
    height: 257px;
    font-size: 16px;
    border: 0.5px solid rgba(0, 0, 0, 0.8);
    margin-top: 13px;
    padding: 10px 10px;
    outline: none;

    ${breakpoint.down('m')`
        height: 80px;
        width: inherit;
    `}
    ${breakpoint.down('s')`
        height: 80px;
    `}
    ${breakpoint.down('xs')`
        height: 80px;
    `}
`;
export const Title = styled.h3`
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
    margin: 0px 0px 8px 0px;
`;

export const IssueSubTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: rgba(0,0,0,0.8);
    margin: 0px 0px 13px 0px;
    ${breakpoint.down('l')`
        margin: 20px 0px 13px 0px;

    `}
`;
export const IssueTitle = styled.h5`
    font-size: 11px;
    color: rgba(0,0,0,0.8);
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 20px;
`;
export const SubmitButton = styled.button`
    width: 128px;
    height: 32px;
    font-size: 11px;
    border-radius: 5px;
    margin-left: auto;
    margin-top: 10px;
    border: none;
    outline: none;
    margin-right: 15px;
    background-color: #6EC81E;
    ${breakpoint.down('m')`
        margin: 0    auto;
    `}
    ${breakpoint.down('s')`
        font-size: 16px;
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

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    ${breakpoint.down('m')`
        padding: 15px;
    `}
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    ${breakpoint.down('m')`
        padding: 15px;
    `}
`;
