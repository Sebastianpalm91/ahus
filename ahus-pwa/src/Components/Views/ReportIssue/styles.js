import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Container = styled.div `
    width: 100%;
    height: 100%;
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
    outline: none;
    :nth-child(1) {
        margin-top: 0px;
    }
    ::placeholder {
        color: #AAAAAA;
        font-family: SceneLight;
        font-weight: 500;
        font-size: 11px;
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
    color: #AAAAAA;
    margin-top: 13px;
    outline: none;
    :nth-child(1) {
        margin-top: 0px;
    }
`;
export const InputTitle = styled.h5`
    font-family: SceneMedium;
    font-size: 11px;
    color: rgba(0,0,0,0.8);
    font-weight: 500;
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
    font-family: SceneMedium;
    font-size: 11px;
    font-weight: 500;
    color: rgba(0,0,0,0.8);
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
export const IssueDescription = styled.p`
    font-family: SceneMedium;
    font-size: 11px;
    font-weight: 500;
    line-height: 19px;
    color: rgba(0,0,0,0.8);
    padding: 0px;
    margin: 95px 0px 0px 0px;
    ${breakpoint.down('l')`
        margin: 0px 0px 0px 0px;
    `}
`;
export const Title = styled.h3`
    font-family: SceneMedium;
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(0,0,0,0.8);
    margin: 0px 0px 8px 0px;
`;

export const IssueSubTitle = styled.h3`
    font-family: ChronicleDeckCond;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: rgba(0,0,0,0.8);
    margin: 0px 0px 13px 0px;
    ${breakpoint.down('l')`
        margin: 0px 0px 13px 0px;

    `}
`;
export const IssueCampus = styled.h5`
    font-family: SceneLight;
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
    color: rgba(0,0,0,0.8);
    margin: 0px 0px 13px 0px;
    letter-spacing: 0.14px;
`;
export const SubmitButton = styled.button`
    width: 128px;
    height: 42px;
    font-family: SceneMedium
    font-size: 11px;
    border-radius: 5px;
    margin-left: auto;
    margin-top: 10px;
    border: none;
    outline: none;
    background-color: #6EC81E;
    color: #FFFFFF;
    margin-top: 50px;
    cursor: pointer;
    ${breakpoint.down('l')`
        margin-top: 10px;
    `}
    ${breakpoint.down('s')`
        font-size: 16px;
    `}
`;

// GET ISSUES
export const IssueContainer = styled.div`
    display: flex;
    flex-direction: column;
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


export const Horizontal = styled.hr`
    border-color: rgba(207, 207, 207, 0.14);
    border-bottom: 0px;
    width: 90%;
`;
