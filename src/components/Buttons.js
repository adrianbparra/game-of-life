import React, { useState, useContext} from 'react';

import { GridContext } from "../util/context.js";

function Buttons({ dispatch, nextGen}) {
    
    const { state, setPlay, clearGrid, changeSpeed }  = useContext(GridContext);

    console.log(state)

    const [gridSize, setGridsize] = useState(15)

    const updateGridSize = (e) => {
        setGridsize(e.target.value)
    }

    return (

        <div className="buttons">
            <p>Generations: {state.generation}</p>
            <div className="actions-container">
                <button className="clear" onClick={() =>{clearGrid()}}>Clear</button>

                <button className="play" onClick={() => {setPlay()}} >{state.play ? 'Pause': 'Play'}</button>
                
                <button className="next-gen" disabled={state.play} onClick={nextGen}>Next Generation</button>

            </div>

            <div className="speed-container">
                <button onClick={()=> changeSpeed("INCREASE")}>Slower</button>
                <p>Speed: {state.speed}ms</p>
                <button onClick={()=> changeSpeed("DECREASE")}>Faster</button>
            </div>

            <div className="range-container">
                <input 
                    disabled={state.play} 
                    type="range" 
                    min="4" 
                    max="50" 
                    value={state.size} 
                    className="slider" 
                    id="speedRange" 
                    onChange={updateGridSize} 
                    onClick={()=> dispatch({
                                type: "updateSize",
                                payload: gridSize
                            })} 
                    onKeyPress={(e) => { 
                        if (e.key === "Enter"){
                            dispatch({
                                type: "updateSize",
                                payload: gridSize
                            })
                        }
                    }} 
                    onTouchEnd={() => dispatch({
                                    type: "updateSize",
                                    payload: gridSize
                                })}
                />
                <label className="grid-size" htmlFor="speedRange">{state.size} x {state.size}</label>

            </div>
        </div>
    )
}


export default Buttons