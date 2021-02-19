import React, {useState, useEffect} from 'react'
import axios from 'axios'


const TeamSelect = () => {


useEffect(() =>{
    axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    .then(res => {
        console.log(res.data.sports[0].leagues[0].teams)
    })
    .catch(err => console.log(err))
},[])


return (
    <div></div>
)
}


export default TeamSelect