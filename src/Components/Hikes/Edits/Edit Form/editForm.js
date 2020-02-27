import React from 'react';
import SaveButton from '../../../Buttons/saveButton';
import Classes from './editForm.module.css';


const EditForm = (props) => {
console.log(props.editRateHike);
return (
    <form className={Classes.hikingForm} >
    <div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Name of Hike:  </label>
                <input type="text" placeholder="Enter name of Trail" value={props.editHikeName} onChange={props.editHikeNameInputHandler}></input>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Date of Hike:  </label>
                <input type="date" value={props.editHikeDate} onChange={props.editHikeDateInputHandler} ></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Miles: </label>
                <input type="text" placeholder="Enter # of miles" value={props.editNumberMiles} onChange={props.editNumberMilesInputHandler}></input>
            </div>
            <div>
                <input type="radio" name="typeOfHike" value="Out and Back" checked={"Out and Back" === props.editHikeType} onChange={(e) => {props.seEditHikeType(e.target.value)}} ></input>
                <label style={{margin:"3px", color:"white"}}>Out and Back</label>
            </div>
            <div>
                <input type="radio" name="typeOfHike" value="Loop" checked={"Loop" === props.editHikeType} onChange={(e) => {props.setEditHikeType(e.target.value)}}></input>
                <label style={{margin:"3px", color:"white"}}>Loop</label>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Location: </label>
                <input type="text" placeholder="Enter the address" value={props.editHikeAddress} onChange={props.editHikeAddressInputHandler}></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Level of Difficulty: </label>
                <select name="Level of Difficulty" onChange={props.editLevelDifficultyInputHandler} value={props.editLevelDifficulty}>
                    <option value="Easy">Easy</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Rate 1-5 (5 is the highest!): </label>
                <select name="Hike Rating" value={props.editRateHike} onChange={props.editRateHikeInputHandler}>
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
                <select name="Pets Allowed" value={props.editPetsAllowed} onChange={props.editPetsAllowedInputHandler}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>
            <div>
                <label style={{margin:"8px", color:"white"}}>Who I Hiked With: </label>
                <input type="text" placeholder="Who I Hiked With" value={props.editWhoHikedWith} onChange={props.editWhoHikedWithInputHandler}></input>
            </div>
        </div>
        <div className={Classes.formRow}>
            <div>
                <label style={{margin:"8px", color:"white"}}>Highlights, secrets, tips, permits or special gear needed:</label>
                <input type="text" className="form-control" placeholder="Enter notes here..." value={props.editNotesAboutHike} style={{height:"120px", width:"450px"}} onChange={props.editNotesAboutHikeInputHandler}></input>
            </div>
        </div>
        <div style={{textAlign:"right", marginRight: "10%", paddingBottom:"3%", paddingTop:"3%"}}>
        <SaveButton saveButton={props.saveButtonHandler} />
        </div>
    </div> 
    </form>
    

);
}
export default EditForm;