import React, { useState, useEffect } from 'react'
import Toolbar from '../componets/toolbar/toolbar'



const Team = () => {

    // console.log(window.location.href.replace('%20', '').split('team/')[1])

    const [TeamName, setTeamName] = useState()
    
    useEffect(() =>{

        setTeamName(window.location.href.replace('%20', '').split('team/')[1])

    })

    //*********************************************************** */
    // roster 
    //   http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/mia/roster
    // standing
    //   http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams
    //************************************************************* */
    return(
        <div>
        <Toolbar/>
        <div>{TeamName}</div>
        </div>
    )
}

export default Team