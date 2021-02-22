import React, { useState } from 'react'
import styles from './toolbar.module.css'
import TeamSelect from '../../componets/TeamDropDown'


const Toolbar = () => {


    return (
    <div className={styles.layout}>
        <div className={styles.logo}>NFl Junction</div>
        <TeamSelect/>
    </div>
    )
}

export default Toolbar