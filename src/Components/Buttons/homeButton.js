import React from 'react';

const HomeButton = (props) => (
    
    <input type="button" className="btn btn-default btn-lg" value="Home"  style={{marginTop:"30px", backgroundColor:"#0F561B", color:"white",fontWeight:"bold",fontSize:"16px",width:"100px"}} onClick={() => props.setHomeScreenButtons("home")} />

);

export default HomeButton;