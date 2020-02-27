import React from 'react';
import Classes from './header.module.css';




const Header = () => (
    <div className="App">
        {/* <div> */}
        <div className={Classes.parent}>
            {/* <img src={MountainLogo} width="120px" alt="MountainLogo"/> */}
            <div  className={Classes.child} >
                <h1 style={{fontSize:'70px',textShadow:"-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000", paddingBottom:"3%"}}>Hiking Journal</h1>
                <p style={{fontSize:'27px',textShadow:"-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000", paddingBottom: "5%"}}>“Of all the paths you take in life, make sure a few of them are dirt.” ― John Muir</p>
            </div>
        </div>
    </div>

);

export default Header;