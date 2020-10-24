import React, { useState, useEffect } from 'react';
import GameScreen from './components/GameScreen';
import Buttons from './components/Buttons';
import Rules from './components/Rules';

import{ gridCreation, nextGeneration } from './util/gridCreation';

import './App.css';



function App() {

  const [gridSize ,setGridSize] = useState(25);
  const [grid, setGrid] = useState([[]]);
  const [play, setPlay] = useState(false);
  const [generations, setGeneration] = useState(0)
  const [speed, setSpeed] = useState(200)

  
  useEffect(()=>{
    
    setGrid(gridCreation(gridSize))

  },[gridSize])

  useEffect(()=> {

    play && setTimeout(() => {
      setGeneration(generations + 1)
      setGrid(nextGeneration(grid))
    }, speed);

  },[grid,play])


  const changeCell = ({x,y}) => {

    if (!play){
      const newState = [...grid];
      newState[y][x].alive = !newState[y][x].alive;
      setGrid(newState);
    }


  }


  const updateGrid = (val) => {
    setGridSize(val)
  }

  const clearGrid = () => {
    setPlay(false)

    setTimeout(() => {
      setGrid(gridCreation(gridSize))
      
      setGeneration(0)

      setSpeed(200)
    }, speed);

  }

  const nextGen = () => {
    
    setGeneration(generations + 1)

    setGrid(nextGeneration(grid))

  }

  return (
    
    <div className="App">
      <header className="header">
        <h1>Game of Life</h1>
      </header>

      <div className="content">

        <Buttons speed={speed} setSpeed={setSpeed} generations={generations} setPlay={setPlay} play={play} gridSize={gridSize} updateGrid={updateGrid} clearGrid={clearGrid} nextGen={nextGen}/>

        <GameScreen grid={grid} changeCell={changeCell}/>

        <Rules/>

      </div>

      
    </div>
    
  );
}

export default App;
