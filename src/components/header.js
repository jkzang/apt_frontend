import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class Header extends Component {
  render() {
    return (
        <header>
                  <h1>Venuepoint</h1>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/apartments">All Apartments</Link>
                          </li>
                          <li>
                              <Link to="/apartments/new">Create New Listing</Link>
                          </li>
                          {Auth.loggedIn()
                              ? <li onClick={this.handleLogout}>
                                  <Link to="/">Logout</Link>
                              </li>
                              : <li>
                                  <Link to="/">Login</Link> | <Link to="/register">Register</Link>
                              </li>
                          }
                      </ul>
                  </nav>
              </header>
    )
  }

  handleLogout(){
        Auth.logout()
  }

}

export default Header;
