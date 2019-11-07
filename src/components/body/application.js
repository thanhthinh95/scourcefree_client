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
        let data = [
            {
                name: "Lập trình cơ bản 01, Lập trình co bản 02",
                vote: 3,
                hashTags: ["Android", "C#"]
            },
            {
                name: "Rắn săn mồi trong mạng Lan",
                vote: 2,
                hashTags: [".NET", "C#"]

            },
            {
                name: "Tin học ứng dụng",
                vote: 4,
                hashTags: ["C++", "C#"]

            },
            {
                name: "Lập trình OOP",
                vote: 1,
                hashTags: ["HI", "II"]
            },
            {
                name: "Lập trình cơ bản 01",
                vote: 4,
                hashTags: ["Android", "C#"]
            },
            {
                name: "Lập trình cơ bản 01, Lập trình co bản 02",
                vote: 4,
                hashTags: ["Android", "C#"]

            }
        ]

        return data.map((item, index) => {
            return <Col md="3">
                <ItemCode
                    name={item.name}
                    vote={item.vote}
                    hashTags={item.hashTags}></ItemCode>
            </Col>
        })


    }



    render() {
        return (
            <div>
                <Category></Category>

                <Row className="pl-3 pr-3">
                    <Col xs lg="2">
                        <Filter></Filter>
                    </Col>

                    <Col xs lg md="8" >
                        <Slide></Slide>
                        <Row>
                            {this.renderItem()}
                        </Row>
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