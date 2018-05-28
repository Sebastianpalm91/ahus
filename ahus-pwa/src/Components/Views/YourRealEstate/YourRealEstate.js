import React from 'react';
import { Container, Wrapper, Header, Main, HeaderInfo, HeaderViewPicture, MainLeft, MainRight, LeftText, RightText, LeftTitle, LeftTitleSub, ImageContactBuilding, ImageContactInside, ImageContactWrapper, ImageContactText, ImageContactAnchor, ContactFooterWrapper, ImageContactFooter, ParkingText, HeaderText, HeaderTextSub, HeaderTextPicture } from './styles';
import SimpleLineIcon from 'react-simple-line-icons';

const YourRealEstate = () => (
  <Container>
      <Wrapper>
          <Header>
              <HeaderInfo>
                  <HeaderText>Entré & Arkitektur</HeaderText>
                  <HeaderTextSub>Kungliga Tekniska Högskolan</HeaderTextSub>
              </HeaderInfo>
              <HeaderViewPicture>
                  <SimpleLineIcon name="picture" />
                    <HeaderTextPicture>
                        Se alla bilder
                    </HeaderTextPicture>
              </HeaderViewPicture>
          </Header>
          <Main>
              <MainLeft>
                  <LeftTitle>Arkitekturskolan</LeftTitle>
                  <LeftTitleSub>ID: </LeftTitleSub>
                    <LeftText>
                        Det nya ovala fyravåningshuset, med en total yta på 8 800 kvm, har skapat en länk genom kvarteret vid Osquars backe och bidrar med en stimulerande och kreativ miljö mitt på campusområdet. Eftersom den nya Arkitekturskolan ligger i direkt anslutning till andra verksamheter vid KTH, finns förutsättningar för nya intressanta samarbeten över gränserna.<br></br><br></br>
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
          <Main>
              <ImageContactBuilding />
                <ImageContactInside />
                  <ImageContactWrapper>
                      <ImageContactText>
                            <strong>Henrik Brännfors</strong><br></br>
                            Förvaltare<br></br>
                            08-685 77 24<br></br>
                            <ImageContactAnchor href="mailto:test@test.com">henrik.brannfors@akademiskahus.se</ImageContactAnchor>
                            <br></br>
                            <br></br>
                            <strong>Anders Ekbergh</strong><br></br>
                            Drifttekniker<br></br>
                            08-685 77 14<br></br>
                            <ImageContactAnchor href="mailto:test@test.com">anders.ekbergh@akademiskahus.se</ImageContactAnchor>
                      </ImageContactText>
                  </ImageContactWrapper>
          </Main>
          <Main>
              <ImageContactFooter />
              <ContactFooterWrapper>
                  <ParkingText>
                        <strong>Parkering</strong><br></br>
                            <br></br>
                            Pris: 20/tim<br></br>
                            Elladdning: Ja<br></br>
                            Antal: 1032 st<br></br>
                            Öppettider: 24 timmar<br></br>
                            Karta<br></br>
                    </ParkingText>
              </ContactFooterWrapper>
          </Main>
      </Wrapper>
  </Container>
)

export default YourRealEstate;
