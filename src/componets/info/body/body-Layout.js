import React from 'react'
// import Stats from '../stats/stats'
// import Story from '../storys/storys'
// import Roster from '../roster/roster'
import styles from './body.module.css'
import FrontPage from '../frontpage/FrontPage'

const body = () => {

return (
    <div className={styles.layout}>
    <FrontPage></FrontPage>
    </div>
)
}

export default body