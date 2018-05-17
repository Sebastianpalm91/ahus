import React from 'react';
import { HomeContainer, HomeWrapper, HomeContainerText, HomeTitle, HomeTitleSub, HomeWrapperText, HomeText, ButtonCity, ButtonCampus, ButtonWrapper } from './styles';

const Settings = () => (
  <HomeContainer>
      <HomeWrapper>
          <HomeContainerText>
              <HomeTitle>Välkommen!</HomeTitle>
              <HomeTitleSub>Innan vi börjar</HomeTitleSub>
              <HomeWrapperText>
                  <HomeText>
                      Via den här tjänsten vill vi hjälpa dig att ta ditt eget ansvar som företagare eller verksamhets-utövare. Via SMS kommer du få veta om det har hänt något intressant inom ditt verksamhets-område. Vi kommer också att skicka vidare viss information från myndigheter
                  </HomeText>
                  <HomeText>
                      som Naturvårdsverket och Livsmedelsverket. Den typen av information kan aldrig bli komplett, du har fortfarande ett eget ansvar för att hålla reda på exempelvis vilka lagar och regler som rör din verksamhet, men vi ska försöka hjälpa till och underlätta ditt arbete.
                  </HomeText>
              </HomeWrapperText>
          </HomeContainerText>
      </HomeWrapper>
      <ButtonWrapper>
          <ButtonCity></ButtonCity>
          <ButtonCampus></ButtonCampus>
      </ButtonWrapper>
  </HomeContainer>
)


export default Settings;
