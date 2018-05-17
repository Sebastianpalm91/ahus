import React, {Component} from 'react'
import { Container, TitleNavigation, TextContainer, Issues } from './styles';
import Form from './Form';
import GetIssues from './GetIssues';
class ReportIssue extends Component {
    state = {
        fields: {}
    };
    onChange = updatedValue => {
        this.setState({
            fields: {
            ...this.state.fields,
            ...updatedValue
        }});
    };
    render() {
        return (
            <Container>
                <TextContainer>
                    <TitleNavigation>Felanmälan</TitleNavigation>
                    <TitleNavigation>Campus | Helsingborg</TitleNavigation>
                </TextContainer>
                <Form onChange={fields => this.onChange(fields)}/>
                <Issues>
                    <GetIssues></GetIssues>
                </Issues>
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </Container>
        )
    }
}

export default ReportIssue
