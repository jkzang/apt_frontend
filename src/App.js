import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import List from './components/list'
import Apartment from './components/apartment'
import Form from './components/form'

class App extends Component {
  render() {
    return (
      <div>
          <Router>
                <div>
                    <Route path="/list" component={List}/>
                    <Route path="/apartment/:id" component={Apartment}/>
                    <Route path="/create" component={Form}/>
                </div>
          </Router>
      </div>
    );
  }
}

export default App;
