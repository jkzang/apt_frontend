import React, { Component } from 'react';
import {} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import apartments from "../data"

class List extends Component {
  render() {
    return (
      <div>
        {apartments.map((apt) => {
            return (
                <div>
                <Link to={`/apartments/${apt.id}`}>{apt.street}</Link>
                <p>{apt.city}</p>
                <p>{apt.zip}</p>
                <p>{apt.state}</p>
                <p>{apt.country}</p>
                </div>
            )
        })}
      </div>
    );
  }
}

export default List;
