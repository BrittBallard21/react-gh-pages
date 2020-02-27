import React, {useState} from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboards/Dashboards';
import NewEntry from './Components/New Entries/newEntry';
import Hikes from './Components/Hikes/Hikes';
import Edits from './Components/Hikes/Edits/Edits';
import HomeButton from './Components/Buttons/homeButton';
import NewEntryButton from './Components/Buttons/newEntryButton';
import Nav from './Components/Nav/Nav';

const BUTTONSTYLE ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "12px"

}

function App() {

  const hike1 = {
    key: 1,
    hikeName: "Peters Canyon",
    hikeDate: "9/30/2019",
    numberMiles:"5.9",
    hikeType: "Out and Back",
    hikeAddress: "Peters Canyon Trailhead",
    levelDifficulty: "Intermediate",
    rateHike: "⭐⭐⭐⭐",
    petsAllowed: true,
    whoHikedWith: "Daniel and Popcorn",
    notesAboutHike: "There is free parking located near the cross streets of X and Y. It was really warm and there is not a lot of shade. Make sure to put on sunscreen and wear a hat!"
  }
    const hike2 = {
      key: 2,
      hikeName: "Red Rock Canyon",
      hikeDate: "8/24/2019",
      numberMiles:"4.2",
      hikeType: "Out and Back",
      hikeAddress: "Red Rock Trail, Lake Forest, CA 92610",
      levelDifficulty: "Easy",
      rateHike: "⭐⭐⭐⭐",
      petsAllowed: false,
      whoHikedWith: "Kelsey",
      notesAboutHike: "There is free parking located across the street near McDonalds. There is some shade on the first part of the hike. Please note that you are not allowed to climb on the rocks."
    }

    const hike3 = {
      key: 3,
      hikeName: "San Juan Loop",
      hikeDate: "8/15/2019",
      numberMiles:"2.1",
      hikeType: "Loop",
      hikeAddress: "34950 Ortega Hwy, Lake Elsinore",
      levelDifficulty: "Easy",
      rateHike: "⭐⭐⭐⭐⭐",
      petsAllowed: false,
      whoHikedWith: "Mackenzie",
      notesAboutHike: "Need an adventure pass. Can buy one before or a day pass is available for purchase at the store across the street. This is a very beautiful hike after there has been some rain. The hills are very nice and green"
    }

 
  const[hikes, setHikes] = useState([hike1,hike2,hike3]);
  const[editHike,setEditHike] = useState();
  const[homeScreenButtons,setHomeScreenButtons] = useState("home");

  const removeHike = (currHike) => {
    let index = hikes.findIndex(hike => (hike.key === currHike.key));
      let newArray = [...hikes]
      newArray.splice(index,1);
      setHikes(newArray);
  }

  const Home = (
      <div className="container">
        <Dashboard hikes={hikes} />
        <Hikes hikes={hikes} removeHike={removeHike} setEditHike={setEditHike}/>
      </div>
  );

  const Edit = (
    <div className="container">
      <Edits hike={editHike} hikes={hikes} addHikes={setHikes} editHike={setEditHike} />
    </div>
);

  return (
    <div className="App">
        <Header className="Header"/>
        <div>
          <Router basename={process.env.PUBLIC_URL + "/"}>
            <div className="container">
              <div className="nav" style={BUTTONSTYLE} />
                  <Nav />
              </div>   
                    <Switch>
                      <Route path="/" component={Home}>
                          <>
                            {/* <Dashboard hikes={hikes}/>
                            <Hikes hikes={hikes} removeHike={removeHike} setEditHike={setEditHike} /> */}
                            {/* {editHike ? <Edits hike={editHike} hikes={hikes} addHikes={setHikes} editHike={setEditHike} /> : null}
                             */}
                              {editHike ? Edit : Home  } 
                          </>
                      </Route>
                      <Route path="/newentry">
                          <NewEntry hikes={hikes} addHikes={setHikes} />
                      </Route>
                    </Switch>
          </Router>
        </div>
        <div>
          <footer style={{backgroundColor:"#0F561B",marginTop:"20px", paddingTop:"100px"}}></footer>
        </div>
    </div>
  );
}

export default App;
