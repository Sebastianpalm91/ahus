import React from 'react';
import { Container, Wrapper, Items, ItemFooter, ItemDate } from './styles';
import AnimatedWrapper from '../../AnimatedWrapper/AnimatedWrapper';

const AboutComponent = () => (
  <Container>
      <Wrapper>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
      </Wrapper>
      <Wrapper>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
      </Wrapper>
      <Wrapper>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
          <Items>
              <ItemDate></ItemDate>
              <ItemFooter></ItemFooter>
          </Items>
      </Wrapper>
  </Container>
)
const About = AnimatedWrapper(AboutComponent);
export default About;
