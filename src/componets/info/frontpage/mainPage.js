import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import AllNewsData from '../../fetch/frontPageFetch'




function FrontPage ()  {

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


    return (
        <div>
            
            { FrontPageData.map(article => {
            //    {console.log(article[0].headline)}
            //    {console.log(FrontPageData)}
               for(let i = 0; i < article.length; i++) {
                    //    {console.log(article[i].headline)}
             return (
               <div>
                <h3>{article[i].headline}</h3>
                <p>{article[i].description}</p>
                </div>
             )
               }
                {/* /* <img>{article.images[0].url}</img> */
                /* <href>{article.links.web.href}</href> */}
            })
            }
           
        </div>
    )


};


export default FrontPage