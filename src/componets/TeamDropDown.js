import React, {useState, useEffect} from 'react'
import styles from '../componets/teamDropDown.module.css'
import axios from 'axios'


const TeamDropDown = () =>{

    const [isShown, setIsShown] = useState(false)

    const [TeamData, setTeamData] = useState([])


    useEffect(() =>{
        axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
        .then(res => {
            const data = (res.data.sports[0].leagues[0].teams)
            setTeamData(data)
        })
        .catch(err => console.log(err))
    },[])
        
    let dropDown = null 
    if(isShown) {
          dropDown = TeamData.map(data => {
                return  <div className={styles.teamSelect}>
                            <div className={styles.dropDownTeam}>{data.team.displayName}</div>
                            <img src={data.team.logos[0].href} className={styles.image}></img>
                        </div> 
            })
    }
    return (
        <div>
            <div 
                className={styles.team}
                onMouseEnter={() => setIsShown(true)}
                // onMouseLeave={() => setIsShown(false)}
                >Team Select</div>
            <div
                className={styles.dropdownContainer}
                onMouseLeave={() => setIsShown(false)}>
                {dropDown}
            </div>
        </div>
    )
}


export default TeamDropDown