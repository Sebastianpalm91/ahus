import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    issues: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/issue`)
      .then(res => {
        const issues = res.data.issues;
        this.setState({ issues });
      })
  }

  render() {
    return (
      <ul>
        { this.state.issues.map(issue => <li>{issue.title}, {issue.body}</li>)}
      </ul>
    )
  }
}
