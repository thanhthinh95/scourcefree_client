import React, { Component } from 'react'
import styles from './style.module.css';
import { withTranslation} from 'react-i18next';


import {

} from 'react-icons/fa'

import {
    Carousel
} from 'react-bootstrap'




class myClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trans: this.props.t,
            i18n: this.props.i18n
        }
    }

    render() {
        const trans = this.state.trans;

        return (
            <Carousel>
                <Carousel.Item className={styles._test}>
                    <img
                        className="d-block w-100"
                        src="images/01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{trans('slide.first.title')}</h3>
                        <p>{trans('slide.first.content')}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles._test}>
                    <img
                        className="d-block w-100"
                        src="images/02.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>{trans('slide.second.title')}</h3>
                        <p>{trans('slide.second.content')}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}


export default withTranslation('common')(myClass); 
