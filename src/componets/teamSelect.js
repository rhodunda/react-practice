import React, {useState, useEffect} from 'react'
import axios from 'axios'


const TeamSelect = () => {


useEffect(() =>{
    axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
},[])
}


export default TeamSelect