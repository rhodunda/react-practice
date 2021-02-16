import React from 'react'


const fetchData = () => {
    axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(res =>{
        console.log(res)
        return JSON.stringify(res)
    })
    .catch(err => {
        console.log(err)
    })

}

export default fetchData