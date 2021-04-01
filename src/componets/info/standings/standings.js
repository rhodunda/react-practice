import React, { useEffect, useState } from 'react'
import styles from './standings.module.css'
import axios from 'axios'



///////// dont know if we are using this


const standings = () => {

    const [standings, setStandings] = useState()

    useEffect(()=> {
        axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
        .then(res => {
            console.log(res)
            setStandings(res)
        })
        .catch(err => console.log(err))
    }, [])



    return(
        <div className={styles.layout}>team stats here</div>
    )
}

export default standings