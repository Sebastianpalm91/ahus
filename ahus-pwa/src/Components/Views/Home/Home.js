import React from 'react';
import { Container, Wrapper, ContainerText, Title, TitleSub, WrapperText, Text, } from './styles';
import AnimatedWrapper from '../../AnimatedWrapper/AnimatedWrapper';

const HomeComponent = () => (
  <Container>
      <Wrapper>
          <ContainerText>
              <Title>Välkommen!</Title>
              <TitleSub>Innan vi börjar</TitleSub>
              <WrapperText>
                  <Text>
                      Det ska vara enkelt att kunna felanmäla en händelse i din fastighet.
                      Att anmäla ett fel är snabbt och enkelt. Navigera dig igenom menyn till vänster för flera val. Om du återkommer hit regelbundet så rekommenderar vi att du skapar ett konto för att få ett helhetsgrepp på dels dina felanmälningar men också nyheter.
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
              </WrapperText>
          </ContainerText>
      </Wrapper>
  </Container>
)

const Home = AnimatedWrapper(HomeComponent);
export default Home;
