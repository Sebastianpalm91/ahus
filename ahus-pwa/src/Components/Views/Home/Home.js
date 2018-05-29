import React, { Component } from "react"
import {
  Container,
  Wrapper,
  ContainerText,
  Title,
  TitleSub,
  WrapperText,
  Text,
  MapWrapper,
  Row
} from "./styles"
import MapContainer from "../../GoogleApiComponent/MapContainer"

class Home extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <Container>
        <Row>
          <Wrapper>
            <ContainerText>
              <Title>Välkommen!</Title>
              <TitleSub>Innan vi börjar...</TitleSub>
              <WrapperText>
                <Text>
                  Så vill vi säga att menyn hittar du i det högra hörnet längst ner för att enkelt komma åt den och kunna navigare runt i applikationen. <br></br>
                    <br></br>
                  Det ska vara enkelt att kunna felanmäla en händelse i din
                  fastighet. Att anmäla ett fel är snabbt och enkelt. Navigera
                  dig igenom menyn till vänster för flera val. Om du återkommer
                  hit regelbundet så rekommenderar vi att du skapar ett konto
                  för att få ett helhetsgrepp på dels dina felanmälningar men
                  också nyheter. Quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </Text>
              </WrapperText>
            </ContainerText>
          </Wrapper>
          <MapWrapper>
            <MapContainer
              current_campus={this.props.current_campus}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBb30G0GTm-T_S-l48ZJpaXxwKs9tvIZO4"
              loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
              containerElement={
                <div style={{ width: `100%`, height: `100%` }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapWrapper>
        </Row>
      </Container>
    )
  }
}

export default Home
