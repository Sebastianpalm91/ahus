import React, { Component } from 'react'
import { InputFields, SubmitButton, InputContainer, InputTextArea, DescriptionWrapper, InfoContainer, IssueSubTitle, IssueTitle, Title, Wrapper, InputType, InputTitle, Label } from './styles';
import axios from 'axios';

class Form extends Component {
    state = {
        title: '',
        body: '',
        name: '',
        location: '',
        phone: '',
        file: '',
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
            file: ""
        });

        const postIssue = {
            title: this.state.title,
            body: this.state.body,
            name: this.state.name,
            location: this.state.location
        };

        axios.post(`http://127.0.0.1:8000/api/issue`, postIssue )
          .then(res => {
          })
    };
    render() {
      return (
            <Wrapper>
                <InputContainer onSubmit={this.onSubmit}>
                <InfoContainer>
                    <Title>Felanmälan</Title>
                    <IssueSubTitle>CAMPUS CITY</IssueSubTitle>
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
                        placeholder="Plats"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="email"
                        value={this.state.location}
                        placeholder="E-post:"
                        onChange={e => this.change(e)}
                    />
                    <InputFields type="text"
                        name="phone"
                        value={this.state.location}
                        placeholder="Telefon"
                        onChange={e => this.change(e)}
                    />
                </InfoContainer>
                <DescriptionWrapper>
                    <InputTitle>Bifoga en video eller bild: </InputTitle>
                    <Label>Välj Fil
                        <InputType type="text"
                            name="file"
                            type="file"
                            value={this.state.location}
                            placeholder="Välj fil"
                            onChange={e => this.change(e)}
                        />
                    </Label>
                    <InputTextArea type="text"
                        name="body"
                        value={this.state.body}
                        placeholder="Beskrivning"
                        onChange={e => this.change(e)}
                        />
                </DescriptionWrapper>
                </InputContainer>
                <SubmitButton type="submit">Skicka</SubmitButton>
            </Wrapper>
      );
    }
}
export default Form;
