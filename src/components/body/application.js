import React, { Component } from 'react'
import styles from './style.module.css';

import {
    Container,
    Button,
    Row,
    Form,
    InputGroup,
    FormControl,
    Col,
    Carousel,
    Tabs,
    Tab
} from 'react-bootstrap'




class Header extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl lg='1'>
                        <Form >
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form>
                    </Col>

                </Row>

                <Row className="justify-content-md-center">
                    <Col xs lg="1"></Col>
                    <Col md="auto w-60">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images/01.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images/02.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images/03.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col xs lg="1"></Col>
                </Row>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        dgdsfgfd
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        fasfagdfg
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        fsdfasdf
                    </Tab>
                </Tabs>
            </Container>





        )
    }
}

export default Header