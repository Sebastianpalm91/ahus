import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, ItemContainer, Items, ContactInfo, ContactPicture, ContactText, ContactTitle, HeaderWrapper, HeaderText, Header } from './styles';

class Contact extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/user`)
      .then(res => {
        const users = res.data.users;
        this.setState({ users });
      })
  }

  render() {
    return (
        <Container>
            <Wrapper>
            <HeaderWrapper>
                <Header>
                    Vi på Akademiska Hus
                </Header>
                <HeaderText>
                    Vi på Akademiska Hus är en stor blandning av människor med olika bakgrunder.
                    Vårt fokus ligger på kund och vi jobbar hårt med att göra er nöjda.
                    Nedan visas de kontakter som är specifika för just ditt campus.
                </HeaderText>
            </HeaderWrapper>
            <ItemContainer>
                {this.state.users.map(user =>
                    <Items key={user.id}>
                        <ContactPicture src={user.avatar}>
                        </ContactPicture>
                        <ContactInfo>
                            <ContactTitle>Förvaltare</ContactTitle>
                            <ContactText>{ user.name }</ContactText>
                            <ContactText>{ user.role }</ContactText>
                            <ContactTitle>{ user.email }</ContactTitle>
                            <ContactText>{ user.phone }</ContactText>
                        </ContactInfo>
                    </Items>
                )}
            </ItemContainer>
            </Wrapper>
        </Container>
    )
  }
}

export default Contact;
