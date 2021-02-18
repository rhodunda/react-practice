import React, {useState, useEffect} from 'react';
import axios from 'axios';
import InfoCards from '../../UI/InfoCards'






const FrontPage = () => {

const [FrontPageData, setFrontPageData] = useState([]);


useEffect(() => {
    axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
    .then(res =>{
        const articles = [res.data.articles];
        setFrontPageData(articles);
    
    })
    .catch(err => {
        console.log(err);
    });
    
    },[]);

   

    
     
          const news = () => {
        for(let i = 0; i < FrontPageData.length; i++) {
        return (
            <InfoCards
            headline={FrontPageData[i].headline}
            img={FrontPageData[i].image}
            dis={FrontPageData[i].description}
            />
        )
            }
        }

    return (
        <div>
            {news()}
        </div>
    )

    
};


export default FrontPage