import React, { Component } from 'react'
// import styles from './style.module.css';

import { 

} from 'react-icons/fa'

import {
    Nav
} from 'react-bootstrap'




class myClass extends Component {
    render() {
        return (
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">ReactJS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">React Native</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">C#</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Android</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">IOS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Web</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-2">Application</Nav.Link>
                </Nav.Item>

            </Nav>

        )
    }
}

export default myClass