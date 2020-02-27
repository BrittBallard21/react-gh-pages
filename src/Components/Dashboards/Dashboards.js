import React from 'react';
import NumberHikesDashboard from './Dashboard/numberHikesDashboard';
import NumberMilesDashboard from './Dashboard/numberMilesDashboard';


const DASHBOARDSTYLE ={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "-20px",
    marginLeft: "-20px",
    paddingTop: "2%"
}

const Dashboard = (props) => (
<div className="App">
    <div style={DASHBOARDSTYLE}>
        <div style={{
            flex:"0 0 20%",
            maxWidth:"18%",
            padding: "10px"
        }}>
        <NumberHikesDashboard hikes={props.hikes}/>
        </div> 
        <div style={{
            flex:"0 0 20%",
            maxWidth:"20%",
            padding: "10px"
        }}>
            
        <NumberMilesDashboard hikes={props.hikes} hike={props.hike} />
        </div>
    
    </div>
</div>
);

export default Dashboard;