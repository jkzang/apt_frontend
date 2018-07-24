import React, { Component } from 'react';
import {ControlLabel, FormControl, Button} from 'react-bootstrap'
import AuthService from '../services/AuthService'

class Login extends Component {
  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
        email: '',
        password: ''

    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
      console.log("hi");
      console.log(this.props.history.replace('/'));
    e.preventDefault()
    this.Auth.login(this.state.email,this.state.password)
    .then(res =>{
      this.props.history.replace('/')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
      console.log(this.props);
    return (

          <form onSubmit = {this.handleFormSubmit.bind(this)}>
          <ControlLabel>Login</ControlLabel>

            <FormControl
              className="form-item"
              placeholder="email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
            <FormControl
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <Button bsStyle="primary"
              className="form-submit"
              value="SUBMIT"
              type="submit"
            > Submit </Button>
          </form>

    );
  }
}

export default Login;
