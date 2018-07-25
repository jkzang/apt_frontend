import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import List from './components/list'
import Apartment from './components/apartment'
import Form from './components/form'
import Login from './components/Login'
import ApartmentCtr from './containers/apartments'
import Header from './components/header'
import Register from './components/register'



class App extends Component {
  render() {
    return (
      <div>
          <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/apartments" component={ApartmentCtr} />
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </div>
          </Router>
      </div>
    );
  }
}

export default App;
