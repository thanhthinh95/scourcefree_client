import React, { Component } from 'react';
import './App.css';

import { Container } from 'react-bootstrap'



import Header from './components/header/application'
import Body from './components/body/application'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
      </div>

    )
  }
}



export default App;