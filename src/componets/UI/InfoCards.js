import React from 'react'
import styles from './infoCards.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const infoCards = (props) => {
    
    console.log(props.data.headline)
    return (
        <div className={styles.card}>
            <Card.Body>
            <Card.Title className={styles.title}> {props.data.headline}</Card.Title>
            <Card.Img className={styles.img} variant='top' src={ (props.data.images[0].url) ? props.data.images[0].url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/ESPN%27s_Old_Logo.png/220px-ESPN%27s_Old_Logo.png'}></Card.Img>
            <Card.Text className={styles.description}>{props.data.description}</Card.Text>
            <div className={styles.greenline}></div>
            </Card.Body>
            {/* <Button variant="primary"></Button> */}
        </div>
    )
}

export default infoCards