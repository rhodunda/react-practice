import React, { useState } from 'react'
import styles from './toolbar.module.css'
import TeamSelect from '../../componets/teamSelect'
import TeamDropDown from '../../componets/TeamDropDown'

const Toolbar = () => {

    const [isShown, setIsShown] = useState(false)


    return (
    <div className={styles.layout}>
        <div className={styles.logo}>NFl Junction</div>
        <TeamDropDown 
            className={styles.team}
            onMouseEnter={(() => setIsShown(true))}
            onMouseLeave={(() => setIsShown(false))}>team select
        </TeamDropDown>
    </div>
    )
}

export default Toolbar