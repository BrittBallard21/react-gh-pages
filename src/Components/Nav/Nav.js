import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div style={{fontSize: "30px",display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "center"}}>
        <div style={{
            paddingLeft: "10px"

    }}>
            <Link to="/" style={{color:"#0192A0"}}>Home</Link>
        </div>
        <div style={{
            paddingLeft: "60px"

    }}>
            <Link to="/newEntry" style={{color:"#0192A0"}}>New Entry</Link>
        </div>
    
    
      </div>
);

export default Nav;

