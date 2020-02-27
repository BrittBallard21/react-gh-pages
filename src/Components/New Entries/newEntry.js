import React, {useState} from 'react';
import NewEntryForm from './New Entry Form/newEntryForm';
import Classes from './newEntry.module.css';


const NewEntry = (props) => {
    const[hikeName, setHikeName] = useState("");
    const[hikeDate, setHikeDate] = useState("");
    const[numberMiles, setNumberMiles] = useState("");
    const[hikeType, setHikeType] = useState("");
    const[hikeAddress, setHikeAddress] = useState("");
    const[levelDifficulty, setLevelDifficulty] = useState("Easy");
    const[rateHike, setRateHike] = useState("1");
    const[petsAllowed, setPetsAllowed] = useState(true);
    const[whoHikedWith, setWhoHikedWith] = useState("");
    const[notesAboutHike, setNotesAboutHike] = useState("");


    const formSubmit = e =>{
        e.preventDefault();

        const newHike ={
            key: props.hikes.length + 2,
            hikeName: hikeName,
            hikeDate: hikeDate,
            numberMiles: numberMiles,
            hikeType: hikeType,
            hikeAddress: hikeAddress,
            levelDifficulty: levelDifficulty,
            rateHike:rateHike,
            petsAllowed:petsAllowed,
            whoHikedWith: whoHikedWith,
            notesAboutHike: notesAboutHike

        }
    
        props.addHikes([newHike,...props.hikes])
    

        setHikeName ("");
        setHikeDate ("");
        setNumberMiles ("");
        setHikeType ("Out and Back");
        setHikeAddress("");
        setLevelDifficulty("Easy");
        setRateHike("1");
        setPetsAllowed(true);
        setWhoHikedWith("");
        setNotesAboutHike("");
    }
    
    const hikeNameInputHandler= (e) =>{
        setHikeName(e.target.value);
    }
    const hikeDateInputHandler= (e) =>{
        setHikeDate(e.target.value);
    }
    const numberMilesInputHandler= (e) =>{
        setNumberMiles(e.target.value);
    }
    const hikeAddressInputHandler= (e) =>{
        setHikeAddress(e.target.value);
    }
    const levelDifficultyInputHandler= (e) =>{
        setLevelDifficulty(e.target.value);
    }
    const rateHikeInputHandler= (e) =>{
        setRateHike(e.target.value);
    }
    const petsAllowedInputHandler= (e) =>{
        setPetsAllowed(e.target.value);
    }
    const whoHikedWithInputHandler= (e) =>{
        setWhoHikedWith(e.target.value);
    }
    const notesAboutHikeInputHandler= (e) =>{
        setNotesAboutHike(e.target.value);
    }


    return(
        <div className="App">
            <h2 style={{marginRight:"30%",fontSize:"22px"}}>New Entry:</h2>
            <div className={Classes.newEntry} >
            <NewEntryForm
            hikeName={hikeName}
            hikeDate={hikeDate}
            numberMiles={numberMiles}
            hikeType={hikeType}
            hikeAddress={hikeAddress}
            levelDifficulty={levelDifficulty}
            rateHike={rateHike}
            petsAllowed={petsAllowed}
            whoHikedWith={whoHikedWith}
            notesAboutHike={notesAboutHike}
            setHikeType={setHikeType}
            hikeNameInputHandler={hikeNameInputHandler}
            hikeDateInputHandler={hikeDateInputHandler}
            numberMilesInputHandler={numberMilesInputHandler}
            hikeAddressInputHandler={hikeAddressInputHandler}
            levelDifficultyInputHandler={levelDifficultyInputHandler}
            rateHikeInputHandler={rateHikeInputHandler}
            petsAllowedInputHandler={petsAllowedInputHandler}
            whoHikedWithInputHandler={whoHikedWithInputHandler}
            notesAboutHikeInputHandler={notesAboutHikeInputHandler}
            saveButtonHandler={formSubmit}
            />
            </div>
        </div>

);

}

export default NewEntry;