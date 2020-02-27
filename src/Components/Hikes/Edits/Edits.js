import React, {useState} from 'react';
import Classes from './edits.module.css';
import EditForm from './Edit Form/editForm';


const Edits = (props) => {
    
    const[editHikeName, setEditHikeName] = useState(props.hike.hikeName);
    const[editHikeDate, setEditHikeDate] = useState(props.hike.hikeDate);
    const[editNumberMiles, setEditNumberMiles] = useState(props.hike.numberMiles);
    const[editHikeType, setEditHikeType] = useState(props.hike.hikeType);
    const[editHikeAddress, setEditHikeAddress] = useState(props.hike.hikeAddress);
    const[editLevelDifficulty, setEditLevelDifficulty] = useState(props.hike.levelDifficulty);
    const[editRateHike, setEditRateHike] = useState(props.hike.rateHike);
    const[editPetsAllowed, setEditPetsAllowed] = useState(props.hike.petsAllowed);
    const[editWhoHikedWith, setEditWhoHikedWith] = useState(props.hike.whoHikedWith);
    const[editNotesAboutHike, setEditNotesAboutHike] = useState(props.hike.notesAboutHike);


    const formSubmit = e =>{
        e.preventDefault();

        let updateIndex = props.hikes.findIndex((hike) => props.hike.key === hike.key);

        const updateHikes=[...props.hikes];

        updateHikes[updateIndex] ={
            key: props.hike.key,
            hikeName: editHikeName,
            hikeDate: editHikeDate,
            numberMiles: editNumberMiles,
            hikeType: editHikeType,
            hikeAddress: editHikeAddress,
            levelDifficulty: editLevelDifficulty,
            rateHike: editRateHike,
            petsAllowed: editPetsAllowed,
            whoHikedWith: editWhoHikedWith,
            notesAboutHike: editNotesAboutHike
        }

        props.addHikes(updateHikes);

        props.editHike(null);
    
    }
    
    const editHikeNameInputHandler= (e) =>{
        setEditHikeName(e.target.value);
    }
    const editHikeDateInputHandler= (e) =>{
        setEditHikeDate(e.target.value);
    }
    const editNumberMilesInputHandler= (e) =>{
        setEditNumberMiles(e.target.value);
    }
    const editHikeAddressInputHandler= (e) =>{
        setEditHikeAddress(e.target.value);
    }
    const editLevelDifficultyInputHandler= (e) =>{
        setEditLevelDifficulty(e.target.value);
    }
    const editRateHikeInputHandler= (e) =>{
        setEditRateHike(e.target.value);
    }
    const editPetsAllowedInputHandler= (e) =>{
        setEditPetsAllowed(e.target.value);
    }
    const editWhoHikedWithInputHandler= (e) =>{
        setEditWhoHikedWith(e.target.value);
    }
    const editNotesAboutHikeInputHandler= (e) =>{
        setEditNotesAboutHike(e.target.value);
    }

    console.log(editRateHike);

    return(
        <div className="App">
            <h2 style={{marginRight:"30%",fontSize:"22px"}}>Edit Entry:</h2>
            <div className={Classes.newEdit} >
            <EditForm
            editHikeName={editHikeName}
            editHikeDate={editHikeDate}
            editNumberMiles={editNumberMiles}
            editHikeType={editHikeType}
            editHikeAddress={editHikeAddress}
            editLevelDifficulty={editLevelDifficulty}
            editRateHike={editRateHike}
            editPetsAllowed={editPetsAllowed}
            editWhoHikedWith={editWhoHikedWith}
            editNotesAboutHike={editNotesAboutHike}
            setEditHikeType={setEditHikeType}
            editHikeNameInputHandler={editHikeNameInputHandler}
            editHikeDateInputHandler={editHikeDateInputHandler}
            editNumberMilesInputHandler={editNumberMilesInputHandler}
            editHikeAddressInputHandler={editHikeAddressInputHandler}
            editLevelDifficultyInputHandler={editLevelDifficultyInputHandler}
            editRateHikeInputHandler={editRateHikeInputHandler}
            editPetsAllowedInputHandler={editPetsAllowedInputHandler}
            editWhoHikedWithInputHandler={editWhoHikedWithInputHandler}
            editNotesAboutHikeInputHandler={editNotesAboutHikeInputHandler}
            saveButtonHandler={formSubmit}
            />
            </div>
        </div>

);

}

export default Edits;