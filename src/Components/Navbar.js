import React from 'react';
import {Link} from "react-router-dom"
function Navbar () {
    return(
        <div className="Nav">
            <a href="/">
            <Link to="/">Home</Link>
            </a>
            <a href="/">
           <Link to="/About">About Us </Link>
            </a>
            <a href="/">
          <Link to="/Contacts">Contacts</Link> 
            </a>
            <a href="/">
            <Link to="/Search">Contacts</Link> 
            </a>
        </div>
    )
}
export default Navbar