import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Push from 'push.js';

Push.create("Hello world!", {
    body: "Is it a fire?",
    icon: '/icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
