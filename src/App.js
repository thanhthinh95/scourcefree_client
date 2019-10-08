import React, {Component} from 'react';
import './App.css';


import Header from './components/header/application'
import Body from './components/body/application'

class App extends Component {
  

  render(){
    return(
      <div>
        <h1>This is App</h1>

        <Header></Header>
        <Body></Body>
      </div>
    )
  }
}



export default App;
