import React from 'react'
import Toolbar from '../componets/toolbar/toolbar'


const Team = () => {

    console.log(window.location.href.replace('%20', '').split('team/')[1])
    
    
    useEffect(() =>{
        // use window.location.href.replace('%20', '').split('team/')[1] 
        // to get team name first letter is capitilized
        // make api call for team infomation
    },[])


    return(
        <div>
        <Toolbar/>
        <div>Team Page</div>
        </div>
    )
}

export default Team