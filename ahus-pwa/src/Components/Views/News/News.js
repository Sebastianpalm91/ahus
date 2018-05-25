import React from 'react';
import { Container, Wrapper, Items, ItemFooter, ItemDate, NewsTitle, NewsAuthor, TextWrapper, DateText, ContextImage, ImageHeader } from './styles';
import axios from 'axios';
import {IntlProvider, FormattedMessage, FormattedDate} from 'react-intl';
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
                            <Items key={news.id} >
                            <ImageHeader src={news.imageheader}>
                                </ImageHeader>
                                <ItemDate>
                            <DateText>
                                <FormattedDate value={new Date(news.created_at)}/>
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
                          <ContextImage src={news.imageicon}>
                          </ContextImage>
                        </ItemFooter>
                    </Items>)}
                </Wrapper>
            </Container>
    )
  }
}
