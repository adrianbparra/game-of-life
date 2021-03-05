import React, { useContext } from 'react';
import { GridContext } from "../util/context.js";


import Cell from "./Cell";

function GameScreen() {
    const { state } = useContext(GridContext);


    return (

        <div className="game-screen">
            <div className="grid">
                {   
                    state.grid.map((row,i) => {
                        return (<div className="row" key={i}>
                            {row.map(cellItem => <Cell key={`${cellItem.y}${cellItem.x}`} cellItem={cellItem} />)}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


export default GameScreen