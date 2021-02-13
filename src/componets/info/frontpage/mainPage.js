import React, {useState, useEffect} from 'react'
import axios from 'axios'



const fetchData = () => {
        axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
        .then(res =>{
            return JSON.stringify(res)
        })
        .catch(err => {
            console.log(err)
        })
    
    }

const frontPage = () => {

const [FrontPageData, setFrontPageData] = useState({})


useEffect(() => {
    fetchData().then (data => {
        setFrontPageData(data)
    })
    
},[])

}


export default frontPage