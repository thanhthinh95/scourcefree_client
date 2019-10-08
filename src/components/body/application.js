import React, { Component } from 'react'
import styles from './style.module.css';

import Bootstrap, { Container, Button, Row } from 'react-bootstrap'




class Header extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className='row'>
                        <h2 className={styles.style01}>this is body</h2>
                    </div >
                </Row>
                <Row>
                    <Button>hi</Button>

                </Row>
            </Container>



        )
    }
}

export default Header