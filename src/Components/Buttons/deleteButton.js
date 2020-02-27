import React from 'react';

const DeleteButton = ({removeHike,hike}) => (
    
    <button type="button" className="btn btn-default btn-sm" style={{height:"30px",width:"30px"}} onClick={() => removeHike(hike)}>
        <span className="glyphicon glyphicon-trash" style={{fontSize:"18px", color:"#0192A0"}}></span>
    </button>

);

export default DeleteButton;