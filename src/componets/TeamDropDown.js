import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';





const TeamDropDown = (props) =>{


    console.log(props.data.team.displayName)
    return (
        <Dropdown options={props.data.team.displayName}>
        </Dropdown>
       
    )
}


export default TeamDropDown