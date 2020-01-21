import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, Redirect,  Link, BrowserRouter as Router } from 'react-router-dom'
import Onboarding from './components/Onboarding';
import AddMember from './components/AddMember';
import Navigation from './components/Navigation';
import Notfound from './components/Notfound';




  const LoginContainer = () => (
    <div>
      <Route path="/onboarding/:id" component={Onboarding} />
    </div>
  )

  const DefaultContainer = () => (
    <div>
    <Navigation/>
        <Route exact path="/" component={App} />
        <Route path="/add-member" component={AddMember} />
        <Route component={Notfound} />
    </div>
  )

  const routing = (
    <Router>
      <div>
        <Switch>
        <Route exact path="/onboarding/:id" component={LoginContainer}/>
        <Route component={DefaultContainer}/>
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(
    <div>
        {routing}
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
