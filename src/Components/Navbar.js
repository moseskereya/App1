import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="nav2">
                <h3>
                 <span> HOME </span> | Recipe Book
                </h3>
                <nav>
                  <ul>
                      <Link to="/">
                        <li>Home</li>
                      </Link>
                      <Link to="/Search">
                        <li>Search Recipe</li>
                      </Link>
                  </ul>  
                </nav>
            </div>
         );
    }
}
 
export default Nav2;