import React, { Component } from 'react';
import axios from 'axios';
import { Container, ItemContainer, Items, ContactInfo, ContactPicture, ContactText, Picture } from './styles';

class Contact extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/user`)
      .then(res => {
        const users = res.data.users;
        this.setState({ users });
        console.log(users);
      })
  }

  render() {
    return (
        <Container>
            {this.state.users.map(user =>
                <ItemContainer key={user.id}>
                    <Items>
                        <ContactInfo>
                            <ContactText>{ user.name }</ContactText>
                            <ContactText>{ user.role }</ContactText>
                            <ContactText>{ user.email }</ContactText>
                            <ContactText>{ user.phone }</ContactText>
                            <ContactPicture>
                                { user.avatar }
                            </ContactPicture>
                        </ContactInfo>
                    </Items>
                </ItemContainer>
            )}
        </Container>
    )
  }
}

export default Contact;
