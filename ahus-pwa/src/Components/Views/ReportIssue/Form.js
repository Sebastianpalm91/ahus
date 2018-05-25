import React, { Component } from 'react'
import { InputFields, SubmitButton, InputContainer, InputTextArea, DescriptionWrapper, InfoContainer, IssueCampus, IssueSubTitle, Title, Wrapper, IssueDescription } from './styles';
import axios from 'axios';

class Form extends Component {
    state = {
        title: '',
        body: '',
        name: '',
        location: '',
        phone: '',
        email: ''
    };
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            title: "",
            body: "",
            name: "",
            location: "",
            phone: "",
            email: ""
        });

        const postIssue = {
            title: this.state.title,
            body: this.state.body,
            name: this.state.name,
            location: this.state.location,
            phone: this.state.phone,
            email: this.state.email,
        };
        axios.post(`http://127.0.0.1:8000/api/issue`, postIssue )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    render() {
      return (
            <Wrapper>
                <InputContainer onSubmit={this.onSubmit}>
                <InfoContainer>
                    <Title>Felanmälan</Title>
                    <IssueCampus>CAMPUS CITY</IssueCampus>
                    <IssueSubTitle>Fyll i formuläret nedan</IssueSubTitle>
                    <InputFields type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Namn"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Titel"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="location"
                        value={this.state.location}
                        placeholder="Plats,  t.ex. Hus: A
                        Vån: 3
                        Rum: 340"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="E-post:"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="phone"
                        value={this.state.phone}
                        placeholder="Telefon"
                        onChange={e => this.change(e)}
                    />
                </InfoContainer>
                <DescriptionWrapper>
                    <IssueDescription>Fyll i formuläret nedan</IssueDescription>
                    <InputTextArea type="text"
                        name="body"
                        value={this.state.body}
                        placeholder="Beskrivning"
                        onChange={e => this.change(e)}
                        />
                    <SubmitButton type="submit">Felanmäl</SubmitButton>
                </DescriptionWrapper>
                </InputContainer>
            </Wrapper>
      );
    }
}
export default Form;
