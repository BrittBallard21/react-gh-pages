import React from 'react';
import MilesLogo from '../../../images/distance.png';
import DeleteButton from '../../Buttons/deleteButton';
import EditButton from '../../Buttons/editButton';
import Classes from './hike.module.css';
import PetsAllowedLogo from '../../../images/petfriendly.png';
import NoPetsAllowedLogo from '../../../images/noPetsAllowedIcon.png';
import MapLogo from '../../../images/map.png';

const Hike = ({hike,removeHike,setEditHike}) => {

return(
<div>
    <div className={Classes.journalEntryRow}>
        <div style={{marginRight:"24%"}}>
            <div style={{textDecoration:"underline", fontSize:"35px"}}>{hike.hikeName}</div>
        </div>
        <div style={{marginLeft:"24%"}}>
            <div style={{fontSize:"12px"}}>{hike.hikeDate}</div>
        </div>
    </div> 
    <div className={Classes.journalEntryRow}>
        <div style={{marginLeft:"1%"}}>
            <img src={MilesLogo} width="40px" height="40px" alt="Miles logo" />
        </div>
        <div style={{marginLeft:"1%", paddingTop:"1%"}}>
            <div style={{fontSize:"14px"}}>{hike.numberMiles} miles</div>
        </div>
        <div style={{marginLeft:"1%", paddingTop:"1%"}}>
            <div style={{fontSize:"14px"}}>{hike.hikeType}</div>
        </div>
        <div style={{marginLeft:"10%",padding:"3px", width:"auto", height:"25px",borderRadius:"8%", backgroundColor:"#0192A0"}}>
            <div style={{fontSize:"14px"}}>{hike.levelDifficulty}</div>
        </div>
        <div style={{marginLeft:"9%"}}>
            <img src={MapLogo} width="40px" height="40px" alt="Map logo" />
        </div>
        <div style={{paddingTop:"1%"}}>
            <div style={{fontSize:"13px"}}>{hike.hikeAddress}</div>
        </div>
    </div> 
    <div className={Classes.journalEntryRow}>
        <div style={{marginRight:"10%"}}>
            <div style={{fontSize:"14px",paddingTop:"10%"}}>Hike Rating: {hike.rateHike}</div>
        </div>
        <div style={{marginLeft:"10%"}}>
            <div>
                {hike.petsAllowed ? <img src={PetsAllowedLogo} width="65px" height="65px" alt="Pets Allowed"/> :
                <img src={NoPetsAllowedLogo} width="70px" height="70px" alt="Pets Not Allowed" />}
            </div>
        </div>
    </div> 
    <div className={Classes.journalEntryRow}>
        <div>
            <div style={{fontSize:"13px"}}>Hiked with {hike.whoHikedWith}</div>
        </div>
    </div> 
    <div className={Classes.journalEntryRow}>
        <div>
            <div>
                <div style={{fontSize:"13px",paddingBottom:"1%"}}>Highlights, secrets, tips, permits or special gear needed:</div>
            </div>
            <div style={{marginLeft:"30px",marginRight:"30px",fontSize:"13px"}}>{hike.notesAboutHike}</div>
        </div>
    </div> 
    <div className={Classes.journalEntryRow} style={{paddingLeft:"60%", paddingBottom:"3%"}}>
            <div>
                <DeleteButton removeHike={removeHike} hike={hike}/>
            </div>
            <div style={{paddingLeft:"5%"}}>
                <EditButton setEditHike={setEditHike} hike={hike} />
            </div>
    </div> 
 
</div>



);
}

export default Hike;