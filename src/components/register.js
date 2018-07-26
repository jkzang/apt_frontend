import React, { Component } from 'react';
import {ControlLabel, FormControl, Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createApartment, createUser } from "../api/index"
import AuthService from '../services/AuthService'


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            Auth: new AuthService(),
            form: {
                user: {
                    name:'',
                    email:'',
                    password:'',
                    password_confirmation: ''
                }

            }

        }
}

handleChange(event){
    let { form } = this.state
    form.user[event.target.name] = event.target.value
    this.setState({form: form})
}

handleSubmit(event){
    event.preventDefault()
    let {form} = this.state

    form.user.password_confirmation = form.user.password

    createUser(form)
    .then(successUser => {
        console.log("SUCCESS! New user: ", successUser);
    })
    .then(successUser =>{
      this.props.history.replace('/apartments')
    })
    //
    // this.state.Auth.login(this.state.user.email,this.state.user.password)
    // .then(res =>{
    //   this.props.history.replace('/apartments')
    // })
}

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
             <ControlLabel>Name</ControlLabel>
             <FormControl
               type="text"
               name = "name"
               value={this.state.value}
               placeholder="Enter your name"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>Email</ControlLabel>
             <FormControl
               type="text"
               name = "email"
               value={this.state.value}
               placeholder="Enter your email"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>Password</ControlLabel>
             <FormControl
               type="password"
               name = "password"
               value={this.state.value}
               placeholder="Enter a secure password"
               onChange={this.handleChange.bind(this)}
             /><br/>

            <Button bsStyle="primary" type='submit' value='submit'>Register</Button>
         </form>
    );
  }
}

export default Register;
