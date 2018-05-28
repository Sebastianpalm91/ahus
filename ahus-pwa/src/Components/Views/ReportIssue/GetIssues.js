import React from 'react';
import axios from 'axios';
import { IssuesUl, IssueList, IssuedTitle, Body } from './styles';

export default class PersonList extends React.Component {
  state = {
    issues: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/issue`)
      .then(res => {
        const issues = res.data.issues;
        this.setState({ issues });
      })
  }

  render() {
    return (
        <IssuesUl>
            { this.state.issues.map(issue => <IssueList key={issue.id}> <IssuedTitle>Titel: {issue.title}</IssuedTitle> <Body>Beskrivning:<br></br> {issue.body}</Body></IssueList>)}
        </IssuesUl>
    )
  }
}
