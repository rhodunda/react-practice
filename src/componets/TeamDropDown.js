import React, {useState} from 'react'
import styles from '../componets/teamDropDown.module.css'



const TeamDropDown = (props) =>{

    const [isShown, setIsShown] = useState(false)

        
    let dropDown = null 
    if(isShown) {
        dropDown = props.data.forEach(name => (
            <div>{name}</div>
        ))
    }
    return (
        <div>
        <div 
        className={styles.team}
        onMouseEnter={() => setIsShown(true)}
        >Team Select</div>
        {dropDown}
        </div>
    )
}


export default TeamDropDown