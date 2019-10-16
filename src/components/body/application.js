import React, { Component } from 'react'
import styles from './style.module.css';

import {

} from 'react-icons/fa'

import {
    Row,
    Col,
} from 'react-bootstrap'

import Category from '../category_body/application';
import Filter from '../filter_body/application';
import News from '../news_body/application';
import Slide from '../slide_body/application';
import ItemCode from '../item_code/application';



class myClass extends Component {

    renderItem = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            let rowObj = [];
            for (let j = 0; j < 4; j++) {
                rowObj.push(<Col>
                    <ItemCode num={j + 1}></ItemCode>
                </Col>)
            }
            data.push(<Row>
                {rowObj}
            </Row>)


        }
        return data;
    }



    render() {
        return (
            <div>
                <Category></Category>

                <Row className="pl-3 pr-3">
                    <Col xs lg="2">
                        <Filter></Filter>
                    </Col>

                    <Col xs lg="8" >
                        <Slide></Slide>

                        {this.renderItem()}

                    </Col>
                    <Col xs lg="2">
                        <News></News>
                    </Col>
                </Row>

            </div>




        )
    }
}

export default myClass