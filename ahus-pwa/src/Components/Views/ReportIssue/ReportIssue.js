import React, {Component} from 'react'
import { Container, IssueContainer, Horizontal } from './styles';
import Form from './Form';
import GetIssues from './GetIssues/GetIssues';
import axios from 'axios'

class ReportIssue extends Component {
    constructor() {
        super()
        this.updateIssues = this.updateIssues.bind(this)
    }

    state = {
        fields: [],
        issues: []
    };

    updateIssues() {
        axios.get(`http://127.0.0.1:8000/api/issue`)
      .then(res => {
        const issues = res.data.issues;
        this.setState({ issues });
      })
    }

    componentDidMount(){
        this.updateIssues();
    }

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
                <Form updateIssues={this.updateIssues} onChange={fields => this.onChange(fields)} current_campus={this.props.current_campus}/>
                <Horizontal />
                <IssueContainer>
                    <GetIssues issues={this.state.issues}></GetIssues>
                </IssueContainer>
            </Container>
        )
    }
}

export default ReportIssue;
