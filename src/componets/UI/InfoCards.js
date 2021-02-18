import React from 'react'


const infoCards = (props) => {
    

    return (
        <div>
            <h3>{props.headline}</h3>
            <img src={props.image}></img>
            <p>{props.dis}</p>
            {/* <href src={props.link}></href> */}
        </div>
    )
}

export default infoCards