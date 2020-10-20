import React,{createContext, useReducer, useState} from 'react';
import GameScreen from './components/GameScreen';
import Buttons from './components/Buttons';
import Rules from './components/Rules';

import myContext from "./context/index";

import './App.css';


function App() {

  const [gridSize ,setGrid] = useState(25);


  const updateGrid = (val) => {
    console.log(val)
    setGrid(val)
  }

  return (
    <myContext.Provider value={["heelo",'hello']}>
      <div className="App">
        <header className="header">
          <h1>Game of Life</h1>
        </header>

        <div className="content">

          <Buttons gridSize={gridSize} updateGrid={updateGrid}/>

          <GameScreen gridSize={gridSize}/>

          <Rules/>

        </div>

        
      </div>
    </myContext.Provider>
  );
}

export default App;
