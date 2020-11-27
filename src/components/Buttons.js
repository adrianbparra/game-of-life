import React, {useState} from 'react';

function Buttons({generations, speed, setSpeed, setPlay, play, updateGrid, clearGrid, nextGen}) {
    
    const [gridSize, setGridsize] = useState(15)

    const updateGridSize = (e) => {
        setGridsize(e.target.value)
    }

    const onPlayGen = () => {
        setPlay(!play)
    }

    return (

        <div className="buttons">

            <p>Generations: {generations}</p>
            <div className="actions-container">
                <button className="clear" onClick={clearGrid}>Clear</button>

                <button className="play" onClick={onPlayGen}>{play ? 'Pause': 'Play'}</button>
                
                <button className="next-gen" disabled={play} onClick={nextGen}>Next Generation</button>

            </div>

            <div className="speed-container">
                <button onClick={()=> setSpeed(speed*2)}>Slower</button>
                <p>Speed: {speed}ms</p>
                <button onClick={()=> setSpeed(speed/2)}>Faster</button>
            </div>

            <div className="range-container">
                <input 
                    disabled={play} 
                    type="range" 
                    min="4" 
                    max="50" 
                    value={gridSize} 
                    className="slider" 
                    id="speedRange" 
                    onChange={updateGridSize} 
                    onClick={()=> updateGrid(gridSize)} 
                    onKeyPress={(e) => { 
                        if (e.key === "Enter"){
                            updateGrid(gridSize)
                        }
                    }} 
                    onTouchEnd={() => updateGrid(gridSize)}
                />
                <label className="grid-size" htmlFor="speedRange">{gridSize} x {gridSize}</label>

            </div>
        </div>
    )
}


export default Buttons