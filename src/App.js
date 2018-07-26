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
import AuthService from './services/AuthService'
import Admin from './components/admin'



class App extends Component {
    constructor(props){
       super()
       this.state = {
           Auth: new AuthService(),
           user: null
       }
     }

    componentWillMount(){
    const userId = this.state.Auth.getUserId()  //This line throw an invalid token error if it is run while there is no user logged in.
    this.state.Auth.fetch(`http://localhost:3001/users/${userId}`).then( res => {
      this.setState({ user: res })
    })
    }

  render() {
    return (
      <div>
          <Router>
                <div>
                    <Header />
                    <Admin />
                    {this.state.user &&
                      <div>
                        <h2>Your Account</h2>
                        <div>Name: {this.state.user.name}</div>
                        <div>Email: {this.state.user.email}</div>


                        <h3>Your Roles</h3>
                        <ul>
                          {this.state.user.roles.map( role => {
                            return(
                              <li key={role.name}>{role.name}</li>
                            )
                          })}
                        </ul>
                      </div>
                    }
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
