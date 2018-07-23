import React, { Component } from 'react';
import {ControlLabel, FormControl, Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createApartment from "../api/index"

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                apartment: {
                    street: "",
                    city: "",
                    zip: "",
                    state: "",
                    country: ""
                }
            }
        }
}
handleChange(event){
    let { form } = this.state
    form.apartment[event.target.name] = event.target.value
    this.setState({form: form})
}

handleSubmit(event){
    event.preventDefault()
    console.log("submit works");
    console.log(this.state.form);
    createApartment(this.state.form)
    .then(successApt => {
        console.log("SUCCESS! New apartment: ", successApt);
    })
}

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
             <ControlLabel>Street</ControlLabel>
             <FormControl
               type="text"
               name = "street"
               value={this.state.value}
               placeholder="Enter text"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>City</ControlLabel>
             <FormControl
               type="text"
               name = "city"
               value={this.state.value}
               placeholder="Enter text"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>Zip Code</ControlLabel>
             <FormControl
               type="text"
               name = "zip"
               value={this.state.value}
               placeholder="Enter text"
               onChange={this.handleChange.bind(this)}
             /><br/>

             <ControlLabel>State</ControlLabel>
             <FormControl
               type="text"
               name = "state"
               value={this.state.value}
               placeholder="Enter text"
               onChange={this.handleChange.bind(this)}
             /> <br/>

             <ControlLabel>Country</ControlLabel>
             <FormControl
               type="text"
               name = "country"
               value={this.state.value}
               placeholder="Enter text"
               onChange={this.handleChange.bind(this)}
             /> <br/>

            <Button bsStyle="primary" type='submit' value='submit' color = 'red'>Submit</Button>
         </form>
    );
  }
}

export default Form;
