import React,{ useState, useEffect} from 'react';
import Cell from "./Cell";

function GameScreen({gridSize}) {

    const [data, setData] = useState([[]])

    // Once useffect to update the size
        // if some cells are selected then keep them same spot
        // or make them be in the middle


    
    useEffect(()=>{

        // create cell array
        setData([[]])

        const grid = []
        
        for(let i = 0; i < gridSize; i++){

            const row = []
            for(let j = 0; j < gridSize; j++){

                const col = {'alive': false, 'x' : j,'y' : i}
                row.push(col)

            }

            grid.push(row)

        }
        setData(grid)

        // create array with the size of array
        // [
            // [{cell: true},{cell: false}, {cell: true} ],

            // [{cell: true},{cell: false}, {cell: true} ],

            // [{cell: true},{cell: false}, {cell: true} ],
        // ]

    },[gridSize])

    const changeState = ({x,y}) => {

        const newState = [...data];

        newState[y][x].alive = !newState[y][x].alive;
        
        setData(newState);

    }


    return (

        <div className="game-screen">
            <div className="grid">
                {   
                    data.map((row,i) => {
                        return (<div className="row" key={i}>
                            {row.map(cell => <Cell cell={cell} changeState={changeState}/>)}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


export default GameScreen