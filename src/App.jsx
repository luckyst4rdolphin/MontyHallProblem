import React, { useState, useEffect }from "react";
import './App.css';
import Intro from './components/Intro.jsx';
import Middle from './components/Middle.jsx';
import MidScroll from './components/MidScroll.jsx';
import PostScroll from './components/PostScroll.jsx';
import Chartscroll from './components/Chartscroll.jsx';
import Presim from './components/Presim.jsx';
import Simulation from './components/Simulation.jsx';
import PostSim from './components/PostSim.jsx';

function App() {
  return(
    <>
    <Intro />
    <Middle />
    <MidScroll />
    <PostScroll />
    <Chartscroll />
    <Presim />
    <Simulation />
    <PostSim />
    </>
  );
 
};

export default App;
