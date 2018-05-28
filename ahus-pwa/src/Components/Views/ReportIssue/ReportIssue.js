import React, {Component} from 'react'
import { Container, IssueContainer } from './styles';
import Form from './Form';
import GetIssues from './GetIssues/GetIssues';

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
                <Form onChange={fields => this.onChange(fields)} current_campus={this.props.current_campus}/>
                <IssueContainer>
                    <GetIssues></GetIssues>
                </IssueContainer>
            </Container>
        )
    }
}

export default ReportIssue;
