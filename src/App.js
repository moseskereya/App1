import React from 'react';
import Search from "./Components/Search";
import About from "./Components/Details";
import Nav from "./Components/Navbar"
import Home from "./Components/Home"
import Hero from "./Components/Nav"
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <HashRouter>
    <main>
      <Nav/>
      <Hero/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Details" component={About}/>
            <Route path="/Search" component={Search} />
         </Switch>
    </main>
    </HashRouter>
  );
}

export default App;
