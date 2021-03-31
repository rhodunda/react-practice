import React from 'react'
import styles from './infoCards.module.css'
import Card from 'react-bootstrap/Card'

const infoCards = (props) => {
     

    console.log(props.data.images)
  
    return (
        <div className={styles.card}>
            <Card.Body>
            <Card.Title className={styles.title}> {props.data.headline}</Card.Title>
            {/* <Card.Img className={styles.img} variant='top' src={ (props.data.images[0].url) ? props.data.images[0].url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/ESPN%27s_Old_Logo.png/220px-ESPN%27s_Old_Logo.png'}></Card.Img> */}
            <Card.Text className={styles.description}>{props.data.description}</Card.Text>
            </Card.Body>
        </div>
    )
}

export default infoCards