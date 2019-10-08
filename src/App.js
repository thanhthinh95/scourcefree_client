import React, {Component} from 'react';
import './App.css';


import Header from './components/header/application'
import Body from './components/body/application'

class App extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    )
  }
}



export default App;
