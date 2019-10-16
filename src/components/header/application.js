import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

import styles from './style.module.css';

import {
    FaUserCircle,
    FaSearch,
    FaShoppingCart
} from "react-icons/fa";

import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    InputGroup,
    FormControl,
    Button

} from 'react-bootstrap';


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
        const i18n = this.state.i18n;

        return (
            <Navbar fixed="top" className={styles._navbar} expand="lg" bg="dark" variant="dark" collapseOnSelect>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">{trans('nameapp')}</Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">{trans('header.one')}</Nav.Link>
                        <Nav.Link href="#pricing">{trans('header.two')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Form className={styles._formSearch}>
                    <InputGroup>
                        <FormControl
                            placeholder={trans('header.search.placeholder')}
                            aria-label="Search"
                        />

                        <Button className={styles._btnSearch}>
                            <FaSearch />
                        </Button>

                        <Button className={styles._btnCart}>
                            <FaShoppingCart />
                        </Button>
                    </InputGroup>
                </Form>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title={trans('header.language.value')} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>{trans('header.language.en')}</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('vn')}>{trans('header.language.vn')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#language/more">{trans('header.language.more')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={this.login}><FaUserCircle /> {trans('header.login')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>



            </Navbar>
        )
    }
}

export default withTranslation('common')(myClass); 
