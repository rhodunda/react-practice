import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TeamDropDown from './TeamDropDown'


const TeamSelect = () => {

const [TeamData, setTeamData] = useState([])

useEffect(() =>{
    axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    .then(res => {
        const data = (res.data.sports[0].leagues[0].teams)
        setTeamData(data)
    })
    .catch(err => console.log(err))
},[])



return (
    <div>
    {TeamData.map(data => {
        return <TeamDropDown
        data={data.team}/>
    })}
    </div>
)

}


export default TeamSelect