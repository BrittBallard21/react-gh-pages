import React from 'react';
import SaveButton from '../../Buttons/saveButton';
import Classes from './newEntryForm.module.css';


const NewEntryForm = (props) => (
    <form className={Classes.hikingForm} >
    <div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Name of Hike:  </label>
                <input type="text" placeholder="Enter name of Trail" value={props.hikeName} onChange={props.hikeNameInputHandler}></input>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Date of Hike:  </label>
                <input type="date" value={props.hikeDate} onChange={props.hikeDateInputHandler} ></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Miles: </label>
                <input type="text" placeholder="Enter # of miles" value={props.numberMiles} onChange={props.numberMilesInputHandler}></input>
            </div>
            <div>
                <input type="radio" name="typeOfHike" value="Out and Back" checked={"Out and Back" === props.hikeType} onChange={(e) => {props.setHikeType(e.target.value)}} ></input>
                <label style={{margin:"3px", color:"white"}}>Out and Back</label>
            </div>
            <div>
                <input type="radio" name="typeOfHike" value="Loop" checked={"Loop" === props.hikeType} onChange={(e) => {props.setHikeType(e.target.value)}}></input>
                <label style={{margin:"3px", color:"white"}}>Loop</label>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Location: </label>
                <input type="text" placeholder="Enter the address" value={props.hikeAddress} onChange={props.hikeAddressInputHandler}></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Level of Difficulty: </label>
                <select name="Level of Difficulty" onChange={props.levelDifficultyInputHandler} value={props.levelDifficulty}>
                    <option value="Easy">Easy</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Rate the Hike: </label>
                <select name="Hike Rating" value={props.rateHike} onChange={props.rateHikeInputHandler}>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                </select>
            </div> 
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Pets Allowed: </label>
                <select name="Pets Allowed" value={props.petsAllowed} onChange={props.petsAllowedInputHandler}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Who I Hiked With: </label>
                <input type="text" placeholder="Who I Hiked With" value={props.whoHikedWith} onChange={props.whoHikedWithInputHandler}></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Highlights, secrets, tips, permits or special gear needed:</label>
                <input type="text" className="form-control" placeholder="Enter notes here..." value={props.notesAboutHike} style={{height:"120px", width:"450px", paddingBottom:"20%"}} onChange={props.notesAboutHikeInputHandler}></input>
            </div>
        </div>
        <div style={{textAlign:"right", marginRight: "10%", paddingBottom:"3%", paddingTop:"3%"}}>
        <SaveButton saveButton={props.saveButtonHandler} />
        </div>
    </div> 
    </form>
    

);

export default NewEntryForm;