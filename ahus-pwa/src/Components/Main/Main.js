import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home/Home';
import ReportIssue from '../Views/ReportIssue/ReportIssue';
import News from '../Views/News/News';
import Contact from '../Views/Contact/Contact';
import YourRealEstate from '../Views/YourRealEstate/YourRealEstate';



class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Felanmalan' component={ReportIssue}/>
                <Route exact path='/nyheter' component={News}/>
                <Route exact path='/kontakt' component={Contact}/>
                <Route exact path='/dinfastiget' component={YourRealEstate}/>
                <Route exact path='/akademiskahus' component={() => window.location = 'https://akademiskahus.se'}/>/>
                <Route exact path='/admin/login' component={() => window.location = 'http://127.0.0.1:8000/admin/login'}/>/>
            </Switch>
        );
    }
}

export default Main;
