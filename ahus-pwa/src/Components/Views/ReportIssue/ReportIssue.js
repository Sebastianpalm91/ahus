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
    render() {
        return (
            <Container>
                <Form onChange={fields => this.onChange(fields)}/>
                <IssueContainer>
                    <GetIssues></GetIssues>
                </IssueContainer>
                <p>{this.state.fields.title}{this.state.fields.body}{this.state.fields.name}</p>
            </Container>
        )
    }
}

export default ReportIssue
