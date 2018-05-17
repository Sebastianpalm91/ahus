import React, { Component } from 'react'
import { InputFields, SubmitButton, InputContainer, InputTextArea } from './styles';
import axios from 'axios';

class Form extends Component {
    state = {
        title: '',
        body: '',
        name: '',
        location: '',
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
            location: ""
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
        <InputContainer onSubmit={this.onSubmit}>
            <InputFields type="text"
                name="title"
                value={this.state.title}
                placeholder="Titel"
                onChange={e => this.change(e)}
            />
            <InputTextArea type="text"
                name="body"
                value={this.state.body}
                placeholder="Beskrivning"
                onChange={e => this.change(e)}
            />
            <InputFields type="text"
                name="name"
                value={this.state.name}
                placeholder="Namn"
                onChange={e => this.change(e)}
            />
            <InputFields type="text"
                name="location"
                value={this.state.location}
                placeholder="Plats"
                onChange={e => this.change(e)}
            />
        <SubmitButton type="submit">Skicka</SubmitButton>
        </InputContainer>
      );
    }
}
export default Form;
