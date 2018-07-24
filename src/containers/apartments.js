import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService'


import List from '../components/list'
import Apartment from '../components/apartment'
import Form from '../components/form'
import Login from '../components/Login'

const Auth = new AuthService()

class ApartmentCtr extends Component {
    render() {
        /* url is going to be localhost:3001/apartments */
        const { url } = this.props.match

        return (
            <div>
                {Auth.loggedIn()
                    ? <Switch>
                    <Route path={`${url}/:id`} component={Apartment} />
                        <Route path={`${url}`}  component={List} />
                        <Route path={`${url}/new`} component={Form} />

                    </Switch>
                    : <Switch>
                        <Route exact path={`${url}`}  component={List} />
                        <Redirect from="/apartments/new" to="/Login"/>
                        <Redirect from={`${url}/:id`} to="/Login"/>
                        <Route exact path="/" component={List} />
                    </Switch>
                }
            </div>
        )
    }
}

export default ApartmentCtr
