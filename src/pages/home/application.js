import React, { Component } from 'react';
import './style.css';

import { Container } from 'react-bootstrap'
import { translate, Trans } from 'react-i18next';


import Header from '../../components/header/application'
import Body from '../../components/body/application'




class myClass extends Component {


  render() {

    return (
      <div>
         <Trans i18nKey='welcome.intro'>
                To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
        {/* <Header></Header>
        <Body></Body>
        <Body></Body>
        <Body></Body>
        <Body></Body> */}
      </div>

    )
  }
}



export default  translate('common')(myClass);