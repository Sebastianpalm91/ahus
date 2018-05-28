import React from 'react';
import axios from 'axios';
import { FormattedDate } from 'react-intl';
import { IssuesUl, IssueList, IssuedTitle, Body, Title, Wrapper, DateText } from './styles';

export default class IssuesList extends React.Component {
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
            <Title>Felanmälningar gjorda på ditt campus:</Title>
            <Wrapper>
                { this.state.issues.map(issue =>
                    <IssueList key={issue.id}>
                        <IssuedTitle>{issue.title} • <DateText> <FormattedDate value={new Date( issue.created_at )}/> </DateText></IssuedTitle>
                        <Body>{issue.location}</Body>
                    </IssueList>
                )}
            </Wrapper>
        </IssuesUl>
    )
  }
}
