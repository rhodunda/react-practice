import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import AllNewsData from '../../fetch/frontPageFetch'




const FrontPage = () => {

const [FrontPageData, setFrontPageData] = useState({});


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


    render() {


        
        const newsCard = FrontPageData.map(article => {
            <div>
                <h3>article.headline</h3>
                <p>article.description</p>
                <img>article.images[0].url</img>
                <href>article.links.web.href</href>
            </div>
        })
    


    return (
        <div>
                {newsCard}
        </div>
    )

    }

}


export default FrontPage