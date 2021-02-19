import React, { useState } from 'react'
import styles from './toolbar.module.css'
import TeamSelect from '../../componets/teamSelect'

const Toolbar = () => {

    const [isShown, setIsShown] = useState(false)


    return (
    <div className={styles.layout}>
    <div className={styles.logo}>NFl Junction</div>
    <button className={styles.team}
     onMouseEnter={(() => setIsShown(true))}
     onMouseLeave={(() => setIsShown(false))}>team select</button>
     {(isShown) ?
     <TeamSelect/>
    
     : <div/> }
    </div>
    )
}

export default Toolbar