import React, { Component } from 'react';
import styles from './style.module.css';

import { 

} from 'react-bootstrap'

import Header from '../../components/header/application'
import Body from '../../components/body/application'

import { withTranslation} from 'react-i18next';


class myClass extends Component {

  render() {
    // const { t, i18n } = this.props;

    return (
      <div>
        <Header></Header>
        <div className={styles._body}>
          <Body></Body>
        </div>
        
      </div>
    )
  }
}

export default withTranslation('common')(myClass); 