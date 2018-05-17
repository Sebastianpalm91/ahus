import styled from "styled-components";
import { breakpoint } from '../../../Assets/Scripts/theme/mixins';

export const ContactContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`

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

// export const ContactTextContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: 96px;
//     background-color: #E7EDF0;
//     ${breakpoint.down('m')`
//         height: 78px;
//         justify-content: center;
//     `}
//     ${breakpoint.down('s')`
//         height: 78px;
//     `}
//     ${breakpoint.down('xs')`
//         height: 78px;
//     `}
// `;
