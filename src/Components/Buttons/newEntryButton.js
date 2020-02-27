import React from 'react';

const NewEntryButton = (props) => (
    
    <input type="button" className="btn btn-default btn-lg" value="New Entry"  style={{marginTop:"30px", backgroundColor:"#0F561B", color:"white",fontWeight:"bold",fontSize:"16px", width:"100px"}} onClick={() => props.setHomeScreenButtons("new entry")} />

);

export default NewEntryButton;