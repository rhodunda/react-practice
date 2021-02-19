import React from 'react'
import styles from './toolbar.module.css'

const toolbar = () => {

    return (
    <div className={styles.layout}>
    <div className={styles.logo}>NFl Junction</div>
    <div className={styles.team}>team select</div>
    </div>
    )
}

export default toolbar