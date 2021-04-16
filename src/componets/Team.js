import React, { useState, useEffect } from 'react'
import Toolbar from '../componets/toolbar/toolbar'
import styles from '../componets/team.module.css'
import axios from 'axios'



const Team = () => {

    // console.log(window.location.href.replace('%20', '').split('team/')[1])

    const [TeamName, setTeamName] = useState()
    const [AllTeamData, setAllTeamData] = useState()
    const [CurrentTeamData, setCurrentTeamData] = useState()
    const [CurrentTeamRecord, setCurrentTeamRecord] = useState(false)

    
    useEffect(() =>{
        setTeamName(window.location.href.replace('%20', ' ').split('team/')[1])
    })

    useEffect(()=> {

        axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
        .then(res => {
            // console.log(res.data.sports[0].leagues[0].teams)
            const teamData = res.data.sports[0].leagues[0].teams
            setAllTeamData(teamData)

            let teamName = window.location.href.replace('%20', ' ').split('team/')[1]
            teamData.forEach(element => {
                if(teamName === element.team.displayName) {
                    setCurrentTeamData(element.team)
                    setCurrentTeamRecord(element.team.record.items[0].summary)
                }
            });
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
        <div className={styles.displayName}>
            <div className={styles.teamName}>{TeamName}</div>
            <div className={styles.teamRecond}>{CurrentTeamRecord}</div>
        </div>
        </div>
    )
}

export default Team