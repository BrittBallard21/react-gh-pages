import React from 'react';
import MilesLogo from '../../../images/distance.png';

const MILESDASHBOARDSTYLE ={
    display: "flex",
    flexDirection: "row"
}



const numberMilesDashboard = (props) => {
    let totalMiles = 0;

    for (let i = 0; i < props.hikes.length; i++) {
        totalMiles += parseFloat(props.hikes[i].numberMiles);
    }

    return (
    <div style={MILESDASHBOARDSTYLE}>
    <img src={MilesLogo} width="70px" height="125px" style={{paddingTop:"10%"}} alt="Miles logo" />
    <div style={{padding: "15px",fontSize:"16px", paddingTop:"19%", fontWeight:"bold"}}>
        <p>Total # Miles:</p>
        <p>{Math.round(totalMiles * 10)/10}</p>
    </div>
    </div>

);
}
export default numberMilesDashboard;