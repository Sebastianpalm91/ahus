import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Push from 'push.js';
import {IntlProvider} from 'react-intl';

Push.create("Hi there", {
    body: "Welcome to Akademiska Hus",
    icon: '/Logga192x192.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
ReactDOM.render(
    <BrowserRouter>
        <IntlProvider locale="en">
            <App />
        </IntlProvider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
