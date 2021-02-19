import React from 'react'





const TeamDropDown = (props) =>{


    console.log(props.data.team.displayName)
    return (
        <div>
           <p>{props.data.team.displayName}</p>
        </div>
       
    )
}


export default TeamDropDown