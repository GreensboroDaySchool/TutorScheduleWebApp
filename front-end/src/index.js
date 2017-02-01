import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from './App';
import Welcome from './welcome/Welcome';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/welcome"/>
                <Route path="/welcome" component={Welcome}/>
            </Route>
        </Router>
    ),
    document.getElementById('app')
);
