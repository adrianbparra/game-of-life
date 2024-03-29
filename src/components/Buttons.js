import React, { useState, useContext} from 'react';
import { GridContext } from "../util/context.js";

function Buttons() {
    const { state, setPlay, clearGrid, changeSpeed, updateSize, nextGeneration }  = useContext(GridContext);

    const [gridSize, setGridsize] = useState(state.size)

    const changeGridSize = (e) => {
        setGridsize(e.target.value)
    }

    return (

        <div className="buttons">
            <p data-testid="generations">Generations: {state.generation}</p>
            <div className="actions-container">
                <button data-testid="clear" className="clear" onClick={() =>{clearGrid()}}>Clear</button>

                <button data-testid="play" className="play" onClick={() => {setPlay()}} >{state.play ? 'Pause': 'Play'}</button>
                
                <button data-testid="next-gen" className="next-gen" disabled={state.play} onClick={()=> {nextGeneration()}}>Next Generation</button>

            </div>

            <div className="speed-container">
                <button onClick={()=> changeSpeed("DECREASE")}>Slower</button>
                <p data-testid="speed">Speed: {state.speed}ms</p>
                <button onClick={()=> changeSpeed("INCREASE")}>Faster</button>
            </div>

            <div className="range-container">
                <input
                    disabled={state.play} 
                    type="range" 
                    min="4" 
                    max="50" 
                    value={gridSize} 
                    className="slider" 
                    data-testid="gridSize" 
                    onChange={changeGridSize} 
                    onClick={()=> updateSize(gridSize)} 
                    onKeyPress={(e) => { 
                        if (e.key === "Enter"){
                            updateSize(gridSize)
                        }
                    }} 
                    onTouchEnd={() => updateSize(gridSize)}
                />
                <label className="grid-size" htmlFor="speedRange">{state.size} x {state.size}</label>

            </div>
        </div>
    )
}


export default Buttons