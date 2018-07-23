import React, { Component } from 'react';
import {} from "react-bootstrap"
import apartments from "../data"
class Apartment extends Component {
  render() {
      let id = this.props.match.params.id
      console.log(this.props.match.params.id);
    return (
        <div>
              <h1>{apartments[id].street}</h1>
              <p>{apartments[id].city}</p>
              <p>{apartments[id].zip}</p>
              <p>{apartments[id].state}</p>
              <p>{apartments[id].country}</p>

              <h1>{apartments[id].contact.name}</h1>
              <p>{apartments[id].contact.number}</p>
              <p>{apartments[id].contact.hours}</p>
        </div>
    );
  }
}

export default Apartment;
