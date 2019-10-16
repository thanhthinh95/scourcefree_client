import React, { Component } from 'react'
// import styles from './style.module.css';

import { 

} from 'react-icons/fa'

import {
    Card,
    ListGroup,
} from 'react-bootstrap'




class myClass extends Component {
    render() {
        return (

            <Card>
                <Card.Header>Bộ Lọc</Card.Header>
                <Card.Body>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">Item 01</ListGroup.Item>
                        <ListGroup.Item action href="#link2">Item 02</ListGroup.Item>
                        <ListGroup.Item action>Item 03</ListGroup.Item>
                        <ListGroup.Item action>Item 03</ListGroup.Item>
                        <ListGroup.Item action>Item 03</ListGroup.Item>
                        <ListGroup.Item action>Item 03</ListGroup.Item>
                        <ListGroup.Item action>Item 03</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

        )
    }
}

export default myClass