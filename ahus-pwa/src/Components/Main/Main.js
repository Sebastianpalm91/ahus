import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

import Home from '../Views/Home/Home';
import ReportIssue from '../Views/ReportIssue/ReportIssue';
import News from '../Views/News/News';
import Contact from '../Views/Contact/Contact';
import YourRealEstate from '../Views/YourRealEstate/YourRealEstate';

class Main extends Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        console.log("MAIN Props")
        console.log(this.props)
    }
    render() {
        return (
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 1000, exit: 1000 }}
                        classNames="fadeIn"
                    >
                        <section className="route-section">
                            <Switch location={this.props.location}>
                                <Route exact path='/' /*component={Home}*/ render={() => <Home current_campus={this.props.current_campus} />}/>
                                <Route exact path='/Felanmalan' render={() => <ReportIssue current_campus={this.props.current_campus} />}/>
                                <Route exact path='/nyheter' component={News}/>
                                <Route exact path='/kontakt' component={Contact}/>
                                <Route exact path='/dinfastiget' component={YourRealEstate}/>
                                <Route exact path='/akademiskahus' component={() => window.location = 'https://akademiskahus.se'}/>
                                <Route exact path='/admin/login' component={() => window.location = 'http://127.0.0.1:8000/admin/login'}/>
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
        )
    }
};

export default withRouter(Main);
