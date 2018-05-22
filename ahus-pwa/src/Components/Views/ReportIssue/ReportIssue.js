import React, {Component} from 'react'
import { Container, IssueContainer, TitleCity } from './styles';
import Form from './Form';
import GetIssues from './GetIssues';

class ReportIssue extends Component {
    state = {
        fields: []
    };
    onChange = updatedValue => {
        this.setState({
            fields: {
            ...this.state.fields,
            ...updatedValue
        }});
    };
    // <p>{this.state.fields.title}{this.state.fields.body}{this.state.fields.name}</p>
    render() {
        return (
            <Container>
                <Form onChange={fields => this.onChange(fields)}/>
                <IssueContainer>
                    <GetIssues></GetIssues>
                </IssueContainer>
            </Container>
        )
    }
}

export default ReportIssue;
