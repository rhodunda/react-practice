import React from 'react'
import Stats from '../stats/stats'
import Story from '../storys/storys'
import Roster from '../roster/roster'
import styles from './body.module.css'

const body = () => {

return (
    <div className={styles.layout}>
    <Stats></Stats>
    <Story></Story>
    <Roster></Roster>
    </div>
)
}

export default body