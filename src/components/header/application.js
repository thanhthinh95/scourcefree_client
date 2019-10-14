import React, { Component } from 'react'

import { withTranslation, Trans } from 'react-i18next';

import styles from './style.module.css';

import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';



class myClass extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            trans : this.props.t,
            i18n : this.props.i18n
        }
    }


 

    render() {
        
        const trans = this.state.trans;
        const i18n = this.state.i18n;

        return (
            <Navbar className={styles.navbar} expand="lg" bg="dark" variant="dark" collapseOnSelect>
                <Navbar.Brand className="pl-5" href="#home">{trans('nameapp')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">{trans('header.one')}</Nav.Link>
                        <Nav.Link href="#pricing">{trans('header.two')}</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title={trans('header.language.value')} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>{trans('header.language.en')}</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('vn')}>{trans('header.language.vn')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#language/more">{trans('header.language.more')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#login">{trans('header.login')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        )
    }
}

export default withTranslation('common')(myClass); 
