import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const Container = styled.div `
    display: flex;
    flex-direction row;
    justify-content: center;
    background-color: #FFFFFF;
    width: 100%;
    margin: 0 auto;
    padding-top: 64px;
    ${breakpoint.down('l')`
        flex-direction column;
    `}
`
export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    width: 416px;
    height: 96px;
    background-color: #EAEFE9;
    margin: 16px;
    padding: 15px;
    ${breakpoint.down('xl')`
        width: 400px;
    `}
    ${breakpoint.down('m')`
        width: 320px;
    `}
    ${breakpoint.down('xs')`
        width: 250px;
    `}
`;

export const ContactInfo = styled.div`

`;

export const ContactText = styled.p`
    padding: 0px;
    margin: 0px;
    font-size: 15px;
`;
export const ContactPicture = styled.div`

`;
export const Picture = styled.img`
    
`;

// export const TitleNavigation = styled.h1`
//   font-size: 1.5em;
//   font-weight: 500;
//   color: #FFFFFF;
//   text-align: center;
//   line-height: 30px;
//   margin: 0px;
//   padding-left: 32px;
//   padding-right: 32px;
//   ${breakpoint.down('m')`
//       :nth-child(2) {
//           display: none;
//       }
//   `}
// `;
