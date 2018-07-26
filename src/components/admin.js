import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ApartmentCtr from '../containers/apartments'
import AuthService from '../services/AuthService'



class Admin extends Component {
    constructor(props){
       super()
       this.state = {
           Auth: new AuthService(),
           users: null
       }
     }

    componentWillMount(){
    this.state.Auth.fetch('http://localhost:3001/admin')
    .then( res => this.setState({ users: res }))
    }

  render() {
      debugger
    return (
      <div>
        <h2>User Profiles</h2>
            {this.state.users.map((profile)=>{
                return(
                    <ul>
                        <div>UserID: {profile.user.id}</div>
                        <div>Name: {profile.user.name}</div>
                        <div>Email: {profile.user.email}</div>
                        <ul>
                          {profile.user.roles.map( role => {
                            return(
                              <li key={role.name}>{role.name}</li>
                            )
                          })}
                        </ul>
                    </ul>
                )
            })}
      </div>
    );
  }
}

export default Admin;
