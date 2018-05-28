import React from 'react';
import styled from "styled-components";

const Pointy = styled.div`
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: relative;
    left: 1rem;
`
const CustomInfoBox = styled.div`
    min-width: 100px;
    min-height: 100px
    display: flex;
    flex-flow: column nowrap;
    background: white;
    padding: 1rem;
    border-radius: 10px;
    font-family: 'Chronicle';
    box-shadow: 3px 3px 5px grey;
    margin: 0rem .5rem 0rem 0;
`


export const InfoBoxInner = (props) => (
    <React.Fragment>
        <CustomInfoBox className="infobox__custom">
            <span style={{fontFamily: 'ChronicleMedium', fontSize: '16px', marginBottom: '.5rem'}}>Titel: {props.title}</span>
            <span style={{fontFamily: 'SceneLight', fontSize: '12px', marginBottom: '.5rem'}}>Plats: {props.location}</span>
            <span style={{fontFamily: 'SceneLight', fontSize: '12px'}}>Beskr:{props.body}</span>
        </CustomInfoBox>
        <Pointy />
    </React.Fragment>
)
export default InfoBoxInner
