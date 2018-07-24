import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import List from './components/list'
import Apartment from './components/apartment'
import Form from './components/form'
import Login from './components/Login'
import ApartmentCtr from './containers/apartments'
class App extends Component {
  render() {
    return (
      <div>
          <Router>
                <div>
                    <Switch>
                        <Route path="/apartments" component={ApartmentCtr}/>
                        <Route path="/login" component={Login}/>
                        <Route exact path="/" component={List}/>
                    </Switch>
                </div>
          </Router>
      </div>
    );
  }
}

export default App;
