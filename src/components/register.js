import React, { Component } from 'react';
import {ControlLabel, FormControl, Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createApartment, createUser } from "../api/index"
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {

                user: {
                    name:'',
                    email:'',
                    password:''
                }

        }
}
handleChange(event){
    let { user } = this.state
    this.user[event.target.name] = event.target.value
    this.setState({user: user})
}

handleSubmit(event){
    event.preventDefault()
    createUser(this.state.form)
    .then(successUser => {
        console.log("SUCCESS! New user: ", successUser);
    })
    .then(successUser =>{
      this.props.history.replace('/apartments')
    })

    this.Auth.login(this.state.user.email,this.state.user.password)
    .then(res =>{
      this.props.history.replace('/apartments')
    })
}

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
             <ControlLabel>Name</ControlLabel>
             <FormControl
               type="text"
               name = "name"
               value={this.state.user.name}
               placeholder="Enter your name"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>Email</ControlLabel>
             <FormControl
               type="text"
               name = "email"
               value={this.state.user.email}
               placeholder="Enter your email"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>Password</ControlLabel>
             <FormControl
               type="password"
               name = "password"
               value={this.state.user.password}
               placeholder="Enter a secure password"
               onChange={this.handleChange.bind(this)}
             /><br/>

            <Button bsStyle="primary" type='submit' value='submit'>Register</Button>
         </form>
    );
  }
}

export default Register;
