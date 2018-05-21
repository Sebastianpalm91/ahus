import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home/Home';
import Report from '../Views/ReportIssue/ReportIssue';
import News from '../Views/News/News';
import Contact from '../Views/Contact/Contact';
import Estate from '../Views/YourRealEstate/YourRealEstate';
import { TransitionGroup } from 'react-transition-group'


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/'   children={({ match, ...rest }) => (
                    <TransitionGroup
                        component={firstChild}>
                        {match && <Home {...rest} />}
                    </TransitionGroup>
                )}/>
                <Route exact path='/Felanmalan' children={({ match, ...rest }) => (
                    <TransitionGroup
                        component={firstChild}>
                        {match && <Report {...rest} />}
                    </TransitionGroup>
                )}/>
                <Route exact path='/nyheter' children={({ match, ...rest }) => (
                    <TransitionGroup
                        component={firstChild}>
                        {match && <News {...rest} />}
                    </TransitionGroup>
                )}/>
                <Route exact path='/kontakt' children={({ match, ...rest }) => (
                    <TransitionGroup
                        component={firstChild}>
                        {match && <Contact {...rest} />}
                    </TransitionGroup>
                )}/>
                <Route exact path='/dinfastiget' children={({ match, ...rest }) => (
                    <TransitionGroup
                        component={firstChild}>
                        {match && <Estate {...rest} />}
                    </TransitionGroup>
                )}/>
                <Route exact path='/akademiskahus' component={() => window.location = 'https://akademiskahus.se'}/>/>
                <Route exact path='/admin/login' component={() => window.location = 'http://127.0.0.1:8000/admin/login'}/>/>
            </Switch>
        );
    }
}

export default Main;
