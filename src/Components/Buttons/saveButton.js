import React from 'react';

const SaveButton = (props) => (
    
    <input type="button" className="btn btn-default btn-sm" style={{fontSize:"16px", color:"#0192A0", fontWeight:"bold"}} value="Save" onClick={props.saveButton}  />

);

export default SaveButton;