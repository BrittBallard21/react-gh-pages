import React from 'react';
import Hike from './Hike/Hike';
import Classes from './hikes.module.css';

const Hikes = (props) => {
    return (
      <div className="App">
        <div className={Classes.journalEntry}>
            {props.hikes.map((hike,index) => {
              return (
            <div key={index} style={{backgroundColor:"#0F561B", borderRadius:"12%", marginTop:"5%"}}>
            <Hike hike={hike} removeHike={props.removeHike} setEditHike={props.setEditHike}/>
            </div>
            )
          })}
        </div>
        
      </div>
    );
  }

export default Hikes;