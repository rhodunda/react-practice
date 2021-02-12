import React from 'react'
import styles from './roster.module.css'
import { render } from 'react-dom'
import axios from 'axios'

const roster = () => {

    render () {
        axios.get('https://api.nfl.com/docs/league/models/json/Team.json')
        .then(data =>{
            console.log(data)
        })
    }
    return (
    <div className={styles.layout}>roster</div>
    )
}


export default roster
