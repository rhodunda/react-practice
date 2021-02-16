import React from 'react'
import axios from 'axios'

 const fetchData = () => {
    axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(res =>{
        const articles = [res.data.articles]
        console.log( articles)
    })
    .catch(err => {
        console.log(err)
    })

}


export default fetchData

