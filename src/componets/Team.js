import React from 'react'
import Toolbar from '../componets/toolbar/toolbar'


const Team = () => {

    console.log(window.location.href.replace('%20', '').split('team/')[1])
    
    
    // get team name from props
    // make api call for team infomation
    // make sure to render the write team info fix url


    return(
        <div>
        <Toolbar/>
        <div>Team Page</div>
        </div>
    )
}

export default Team