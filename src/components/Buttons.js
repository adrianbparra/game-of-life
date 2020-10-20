import React from 'react';

function Buttons({ updateGrid, gridSize}) {
    

    return (

        <div className="buttons">

            <button>Play</button>

            <button>Pause</button>

            <button>Next Generation</button>

            <button>Clear</button>

            <input type="range" min="10" max="100" value={gridSize} class="slider" id="myRange" onChange={(e)=> updateGrid(e.target.value)}/>
        </div>
    )
}


export default Buttons