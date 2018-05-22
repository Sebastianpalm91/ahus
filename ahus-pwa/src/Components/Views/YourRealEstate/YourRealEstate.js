import React from 'react';
import { Container, Wrapper, Header, Main, HeaderInfo, HeaderViewPicture, MainLeft, MainRight, LeftText, RightText, LeftTitle, LeftTitleSub } from './styles';

const YourRealEstate = () => (
  <Container>
      <Wrapper>
          <Header>
              <HeaderInfo>
              </HeaderInfo>
              <HeaderViewPicture>
              </HeaderViewPicture>
          </Header>
          <Main>
              <MainLeft>
                  <LeftTitle>Arkitekturskolan</LeftTitle>
                  <LeftTitleSub>ID: </LeftTitleSub>
                    <LeftText>
                        Det nya ovala fyravåningshuset, med en total yta på 8 800 kvm, har skapat en länk genom kvarteret vid Osquars backe och bidrar med en stimulerande och kreativ miljö mitt på campusområdet. Eftersom den nya Arkitekturskolan ligger i direkt anslutning till andra verksamheter vid KTH, finns förutsättningar för nya intressanta samarbeten över gränserna.
                        Exteriört har byggnaden fått sin karaktär av de svängda fasaderna, uppbyggda av ramar med förskjutna öppningar och glaspartier. Ramverket av rostrött corténstål kan ses som en omtolkning av de äldre husens röda tegelarkitektur som blivit KTH:s signum.
                    </LeftText>
              </MainLeft>
              <MainRight>
                    <RightText>
                        <strong>Arkitekt:</strong> Tham & Videgård - Erik Lallerstedt
                        <strong><br></br>Campusområde:</strong> KTH Campus
                        <strong><br></br>Adress:</strong> Drottning Kristinas väg 4-8
                        <strong><br></br>Ort:</strong> Stockholm
                        <strong><br></br>Anl. nr:</strong> A0043004
                        <strong><br></br>Hyresgäst:</strong> KTH Arkitekturskolan
                        <strong><br></br>Verksamhet:</strong> Arkitekturutbildning och entréplats
                        <strong><br></br>Bruttoarea:</strong> 14300 kvm
                    </RightText>
              </MainRight>
          </Main>
      </Wrapper>
  </Container>
)

export default YourRealEstate;
