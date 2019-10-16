import React, { Component } from 'react'
// import styles from './style.module.css';

import {

} from 'react-icons/fa'

import {
    Card,
    Row
} from 'react-bootstrap'




class myClass extends Component {
    render() {
        return (
            <Card>
                <Card.Header>Tin mới</Card.Header>
                <Card.Body>
                    <Row>
                        <a href="#abc">Khả Bảnh vừa bị bắt</a>
                        <br />
                    </Row>

                    <Row>

                        <a href="#xyz">Huấn Hoa Hồng vừa ra khỏi tù</a>
                    </Row>

                    <Row>
                        <a href="#ikl">Tuấn Tiền Tỉ vừa trúng vietlot</a>
                        <br />
                    </Row>
                    

                    <Row>
                        <a href="#abc">Khả Bảnh vừa bị bắt</a>
                        <br />
                    </Row>

                    <Row>

                        <a href="#xyz">Huấn Hoa Hồng vừa ra khỏi tù</a>
                    </Row>

                    <Row>
                        <a href="#ikl">Tuấn Tiền Tỉ vừa trúng vietlot</a>
                        <br />
                    </Row>

                </Card.Body>
            </Card>

        )
    }
}

export default myClass