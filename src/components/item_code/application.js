import React, { Component } from 'react'
import styles from './style.module.css';

import {
    FaStar
} from 'react-icons/fa'

import {
    Card,
    Badge
} from 'react-bootstrap'




class myClass extends Component {
    starVote = (vote) => {
        switch (vote) {
            case 0:
                return <div>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            case 1:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            case 2:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            case 3:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            case 4:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar></FaStar>
                </div>
            case 5:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                </div>
            default:
                return <div>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                    <FaStar className={styles._star}></FaStar>
                </div>
        }
    }

    render() {


        return (

            <Card className={styles._cart}>
                <Card.Img variant="top" alt='image' src="images/03.jpg" />

                {/* <Card.Body>
                   
                </Card.Body> */}

                <Card.Header>
                    <div>
                        <label title='asdf'>Rắn săn mồi trong mạng LAN</label>
                    </div>
                    {this.starVote(Number(this.props.num))}



                    <h6 className={styles._divHashTag}>
                        <Badge className={styles._hashTag}>@Android</Badge>
                        <Badge variant="light">@Android</Badge>
                    </h6>
                </Card.Header>
            </Card>

        )
    }
}

export default myClass