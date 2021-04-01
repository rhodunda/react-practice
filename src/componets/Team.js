import React, { useState, useEffect } from 'react'
import Toolbar from '../componets/toolbar/toolbar'
import styles from '../componets/team.module.css'
import axios from 'axios'



const Team = () => {

    // console.log(window.location.href.replace('%20', '').split('team/')[1])

    const [TeamName, setTeamName] = useState()
    const [standings, setStandings] = useState()
    
    useEffect(() =>{

        setTeamName(window.location.href.replace('%20', ' ').split('team/')[1])

    })

    useEffect(()=> {
        axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])

    //*********************************************************** */
    // roster 
    //   http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia/roster
    // standing
    //   http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams
    //************************************************************* */
    return(
        <div>
        <Toolbar/>
        <div className={styles.displayName}>{TeamName}</div>
        </div>
    )
}

export default Team