import React, { Component } from 'react';
import './style.css';

import { Container } from 'react-bootstrap'


import Header from '../../components/header/application'
import Body from '../../components/body/application'

import { withTranslation, Trans } from 'react-i18next';


class myClass extends Component {
  constructor() {
    super();
    

  }

  render() {
    const { t, i18n } = this.props;

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

export default withTranslation('common')(myClass); 