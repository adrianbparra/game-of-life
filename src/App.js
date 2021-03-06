import React, { useState, useEffect, useReducer, useContext } from 'react';

import GameScreen from './components/GameScreen';
import Buttons from './components/Buttons';
import Rules from './components/Rules';
import GridSamples from './components/GridSamples';

import { GridContext } from "./util/context";

import{ gridCreation, nextGeneration, sampleCreation } from './util/gridCreation';
import {reducer, initialState} from "./util/reducer.js";

import './App.css';

function App() {
  const { state }  = useContext(GridContext);
  console.log("APP", state)

  // const [state, dispatch] = useReducer(reducer, initialState)
  const [gridSize ,setGridSize] = useState(15);
  const [grid, setGrid] = useState([[]]);
  const [play, setPlay] = useState(false);
  const [generations, setGeneration] = useState(0)
  const [speed, setSpeed] = useState(200)

  
  useEffect(()=>{

    console.log("app useEffect")

  },[])

  useEffect(()=> {

    play && setTimeout(() => {
      setGeneration(generations + 1)
      setGrid(nextGeneration(grid))
    }, speed);

  },[grid,state.play])


  // const changeCell = ({x,y}) => {

  //   if (!play){
  //     const newState = [...grid];
  //     newState[y][x].alive = !newState[y][x].alive;
  //     setGrid(newState);
  //   }


  // }


  // const updateGrid = (val) => {
  //   setGridSize(val)
  // }

  // const clearGrid = () => {
  //   setPlay(false)

  //   setTimeout(() => {
  //     setGrid(gridCreation(gridSize))
      
  //     setGeneration(0)

  //     setSpeed(200)
  //   }, speed);

  // }

  const nextGen = () => {
    setGeneration(generations + 1)
    setGrid(nextGeneration(grid))
  }

  const sampleGen = (sample) => {

    // sampleCreation(sample,grid,gridSize)
    if (!play){
      setGrid(sampleCreation(sample,grid,gridSize))
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1><a href={window.location.href}>Game of Life</a></h1>
      </header>

      <main className="content">
        <Buttons nextGen={nextGen}/>

        <GameScreen />

        <GridSamples sampleGen={sampleGen} play={play}/>

        <Rules/>

      </main>

      <footer>
        <small>Created by <a href='https://adrianbparra.com/' target="_blank" rel="noopener noreferrer">adrianbparra.com</a> </small>
      </footer>
    </div>
  );
}

export default App;
