import React from 'react';
import HikingPerson from '../../../images/hikingPersonIcon.png';

const HIKINGDASHBOARDSTYLE ={
    display: "flex",
    flexDirection: "row",
}

const numberHikesDashboard = (props) => {

   return (
    <div style={HIKINGDASHBOARDSTYLE}>
    <img src={HikingPerson} width="70px" height="110px"  alt="Hiking Person" />
    <div style ={{fontSize:"16px", paddingTop:"15%",fontWeight:"bold"}}>
        <p>Total # Hikes: </p>
        <p>{props.hikes.length}</p>
    </div>
    </div>

);
}
export default numberHikesDashboard;