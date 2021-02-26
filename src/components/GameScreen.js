import React from 'react';
import Cell from "./Cell";

function GameScreen({grid,changeCell,dispatch, state}) {

    return (

        <div className="game-screen">
            <div className="grid">
                {   
                    state.grid.map((row,i) => {
                        return (<div className="row" key={i}>
                            {row.map(cellItem => <Cell key={`${cellItem.y}${cellItem.x}`} cellItem={cellItem} dispatch={dispatch}/>)}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


export default GameScreen