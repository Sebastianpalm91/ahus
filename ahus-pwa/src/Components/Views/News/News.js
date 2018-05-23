import React from 'react';
import { Container, Wrapper, Items, ItemFooter, ItemDate, NewsTitle, NewsAuthor, TextWrapper, DateText, ContextImage } from './styles';

const About = () => (
  <Container>
      <Wrapper>
          <Items>
              <ItemDate>
                    <DateText>
                        30/12-2018
                    </DateText>
              </ItemDate>
              <ItemFooter>
                  <TextWrapper>
                    <NewsTitle>
                        Hej
                    </NewsTitle>
                    <NewsAuthor>
                        / Kalle Kalas
                    </NewsAuthor>
                </TextWrapper>
                <ContextImage>
                </ContextImage>
              </ItemFooter>
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
export default About;
