import React, {useState} from 'react';

function Buttons({generations, speed, setSpeed, setPlay, play, updateGrid, clearGrid, nextGen}) {
    
    const [gridSize, setGridsize] = useState(25)

    const updateGridSize = (e) => {
        setGridsize(e.target.value)
    }

    const onPlayGen = () => {
        setPlay(!play)
    }

    return (

        <div className="buttons">

            <p>Generations: {generations}</p>

            <button className={play? "running":""} onClick={onPlayGen}>{play ? 'Pause': 'Play'}</button>

            <button disabled={play} onClick={nextGen}>Next Generation</button>

            <div className="speed">
                <button onClick={()=> setSpeed(speed*2)}>Slower</button>
                <p>Speed: {speed}ms</p>
                <button onClick={()=> setSpeed(speed/2)}>Faster</button>
            </div>
            <button onClick={clearGrid}>Clear</button>
            <div>
                <p htmlFor="speedRange">Grid Size: {gridSize}</p>
                <input disabled={play} type="range" min="4" max="50" value={gridSize} class="slider" id="speedRange" onChange={updateGridSize} onMouseUp={()=>updateGrid(gridSize)}/>

            </div>
        </div>
    )
}


export default Buttons