import React, { Component } from 'react';
import './style.css';

import { Container } from 'react-bootstrap'

import Header from '../../components/header/application'
import Body from '../../components/body/application'

class myClass extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Body></Body>
        <Body></Body>
        <Body></Body>
      </div>

    )
  }
}



export default myClass;