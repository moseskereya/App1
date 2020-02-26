import React from 'react';
import Search from "./Components/Search";
import About from "./Components/About";
import Nav from "./Components/Navbar"
import Contact from "./Components/Contact";
import Home from "./Components/Home"
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <HashRouter>
    <main>
    <Nav/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/About" component={About}/>
            <Route path="/Contacts" component={Contact} />
            <Route path="/Search" component={Search} />
         </Switch>
    </main>
    </HashRouter>
  );
}

export default App;
