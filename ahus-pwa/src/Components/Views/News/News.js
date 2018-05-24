import React from 'react';
import { Container, Wrapper, Items, ItemFooter, ItemDate, NewsTitle, NewsAuthor, TextWrapper, DateText, ContextImage } from './styles';
import axios from 'axios';

export default class News extends React.Component {
  state = {
    newsfeed: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/news`)
      .then(res => {
        const newsfeed = res.data.news;
        this.setState({ newsfeed });
      })
  }

  render() {
    return (
        <Container>
            <Wrapper>
                    { this.state.newsfeed.map(news =>
                            <Items key={news.id}>
                        <ItemDate>
                            <DateText>
                                {news.created_at}
                            </DateText>
                        </ItemDate>
                        <ItemFooter>
                            <TextWrapper>
                              <NewsTitle>
                                  {news.title}
                              </NewsTitle>
                              <NewsAuthor>
                                  / {news.author_id}
                              </NewsAuthor>
                          </TextWrapper>
                          <ContextImage>
                          </ContextImage>
                        </ItemFooter>
                    </Items>)}
                </Wrapper>
            </Container>
    )
  }
}
