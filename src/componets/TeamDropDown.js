import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';





const TeamDropDown = (props) =>{
    let data = props.data
    console.log(data)
    return (
        <Dropdown
        //  options={props.data.team.displayName}
        />

    )
}


export default TeamDropDown