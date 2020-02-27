import React from 'react';

const EditButton = (props) => (
    
    <button type="button" className="btn btn-default btn-sm" style={{fontSize:"16px", color:"#0192A0"}} onClick={() => props.setEditHike(props.hike)}>
          <span className="glyphicon glyphicon-edit" style={{fontSize:"20px", color:"#0192A0"}}></span>
    </button>

);

export default EditButton;