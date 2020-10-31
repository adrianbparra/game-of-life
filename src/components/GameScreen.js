import React from 'react';
import Cell from "./Cell";

function GameScreen({grid,changeCell}) {

    return (

        <div className="game-screen">
            <div className="grid">
                {   
                    grid.map((row,i) => {
                        return (<div className="row" key={i}>
                            {row.map(cellItem => <Cell key={cellItem.x+cellItem.y} cellItem={cellItem} changeCell={changeCell}/>)}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


export default GameScreen