import React, {useState, useEffect} from 'react';
import axios from 'axios';
import InfoCards from '../../UI/InfoCards'
import styles from './frontPage.module.css'



const FrontPage = () => {

const [FrontPageData, setFrontPageData] = useState([]);


useEffect(() => {
    axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(res =>{
        const articles = res.data.articles;
        setFrontPageData(articles);
    
    })
    .catch(err => {
        console.log(err);
    });
    
    },[]);

    
        console.log(FrontPageData)
    return (
        <div className={styles.front}>
            {FrontPageData.map(data => {
                return  <InfoCards data={data}/>
            })}
        </div>
    )

    
};


export default FrontPage