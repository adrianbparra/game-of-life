
const reducerState = {
    "generation": 0,
    "size": 15,
    "grid": []
}

function reducer(state, action) {

    switch (action.type) {
        case 'nextGeneration':
            console.log("nextGeneration")
            break
        
        case "updateSize":
            console.log("update size")
            return {
                ...state,
                "size": action.payload
            };
            
        
        case "changeCell":
            const {x, y} = action.payload;
            const cell = state.grid[y][x]

            cell.alive = !cell.alive

            console.log(cell)

            // state.grid[y][x] = cell
            // const newState = [...state.grid];
            // newState[y][x].alive = !newState[y][x].alive;
            // console.log(x,y)

            return {
                ...state,
                "grid": state.grid
            };

        case "generateGrid":
            const newGrid = []
      
            for(let i = 0; i < state.size; i++){

                const row = []
                for(let j = 0; j < state.size; j++){
                    
                    const col = {'alive': false, 'x' : j,'y' : i}
                    row.push(col)

                }

                newGrid.push(row)

            }

            console.log(newGrid)

            return {
                ...state,
                "grid": newGrid
            }

            

        default:
            return state
    }
}

export {reducer, reducerState}