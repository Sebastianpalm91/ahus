import styled from "styled-components";

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

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const InputFields = styled.input`

    width: 150px;
    height: 20px;
`;

export const SubmitButton = styled.button`
    width: 80px;
    height: 15px;
`;

export const Issues = styled.ul`

`;
