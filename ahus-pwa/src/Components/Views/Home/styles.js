import styled from "styled-components";

export const HomeContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
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

export const HomeTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 96px;
    background-color: #4D4D4D;
`;

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 368px;
    width: 640px;
    border-radius: 5px;
    background-color: #F2F1EA;
`;

export const HomeContainerText = styled.div`
    display: inline-block;
    height: 304px;
    width: 576px;
    border-radius: 5px;
    background-color: #686868;
`;

export const HomeWrapperText = styled.div`
    display: flex;
    flex-direction: row;
`;


export const HomeTitle = styled.h1`
    text-align: left;
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 500;
    line-height: 30px;
    margin: 0px;
    padding: 16px;
`;

export const HomeTitleSub = styled.h4`
    height: 18px;
    width: 160px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    margin: 0px;
    padding: 0px 16px 0px 16px;
`;

export const HomeText = styled.p`
    width: 272px;
    height: 182px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 20px;
    margin: 0px;
    padding: 16px;
`;
