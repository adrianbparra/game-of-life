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
        
    // Once useffect to update the size
        // TODO if some cells are selected then keep them same spot
        // or make them be in the middle
    const grid = gridCreation(gridSize)
    
    setGrid(grid)

  },[gridSize])

  useEffect(()=> {

    play && setTimeout(() => {

      const newGrid = nextGeneration(grid)
      setGeneration(generations + 1)

    setGrid(newGrid)
    }, speed);

  },[generations,play])


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
    const newGrid = gridCreation(gridSize)

    setTimeout(() => {
      setGrid(newGrid)
      
      setGeneration(0)

      setSpeed(200)
    }, speed);

  }

  const nextGen = () => {
    const newGrid = nextGeneration(grid)
    setGeneration(generations + 1)

    setGrid(newGrid)

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
