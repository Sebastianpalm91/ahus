import React from 'react';
import { FormattedDate } from 'react-intl';
import { IssuesUl, IssueList, IssuedTitle, Body, Title, Wrapper, DateText } from './styles';

export default class IssuesList extends React.Component {
  render() {
    return (
        <IssuesUl>
            <Title>Felanmälningar gjorda på ditt campus:</Title>
            <Wrapper>
                { this.props.issues.map(issue =>
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
