import React, { Component } from 'react'
import config from 'react-global-configuration';
import styles from './style.module.css';

import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className={styles.navbar} expand="lg" bg="dark" variant="dark" collapseOnSelect>
                <Navbar.Brand className="pl-5" href="#home">{config.get('nameapp')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                </Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        )
    }
}

export default Header