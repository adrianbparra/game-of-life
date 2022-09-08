import React, { useEffect, useContext } from 'react';

import GameScreen from './components/GameScreen';
import Buttons from './components/Buttons';
import Rules from './components/Rules';
import GridSamples from './components/GridSamples';

import { GridContext } from "./util/context";

import './App.css';

function App() {
  const { state, nextGeneration }  = useContext(GridContext);

  useEffect(()=>{

    var timeout

    if (state.play){
      
      timeout = setTimeout(() => {
  
        nextGeneration()
  
      }, state.speed);
    }

    return () => {
      clearTimeout(timeout)
    }

  },[state.grid,state.play])


  return (
    <div className="App">
      <header className="header">
        <h1><a href={window.location.href}>Game of Life</a></h1>
      </header>

      <main className="content">
        <Buttons/>

        <GameScreen/>

        <GridSamples/>

        <Rules/>

      </main>

      <footer>
        <small>Created by <a href='https://adrianbparra.com/' target="_blank" rel="noopener noreferrer">adrianbparra.com</a> </small>
      </footer>
    </div>
  );
}

export default App;
