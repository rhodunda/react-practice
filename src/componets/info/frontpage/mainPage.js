import React, {useState, useEffect} from 'react'
import axios from 'axios'



const fetchData = async () => {
        axios.get("http://site.api.espn.com/apis/site/v2/sports/football/nfl/news")
        .then(res =>{
            console.log(res)
            console.log(res)
            return JSON.stringify(res)
        })
        .catch(err => {
            console.log(err)
        })
    
    }



const FrontPage = () => {

const [FrontPageData, setFrontPageData] = useState();


useEffect(() => {

     fetchData().then ( res => {
        for(let key in res.data.articles){
            setFrontPageData(res.data.articles[key]);
            console.log(FrontPageData)
        }
        
        
    })
    // console.log(FrontPageData)
    // fetchData().then((data) => {
    //     console.log(data)
    //     setFrontPageData(data)
    // },[])
    
},[]);

// render() {

    // const makecard = FrontPageData.map(data => {
    //     console.log(data)
    // })

    return (
        <div>
            {FrontPageData}
        </div>
    )
// }

}


export default FrontPage