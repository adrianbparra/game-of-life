import { gridCreation } from "./gridCreation.js";

const initialState = {
    "generation": 0,
    "size": 15,
    "grid": [],
    "play": false,
    "speed" : 200
}

function reducer(state, action) {

    switch (action.type) {
        case "SET_SPEED":

            var speed = 0

            if (action.payload === "INCREASE"){
                speed = state.speed / 2
            } else if (action.payload === "DECREASE") {
                speed = state.speed * 2
            }

            return {
                ...state,
                "speed" : speed
            }
        case "SET_PLAY":
            return {
                ...state,
                "play" : !state.play
            }

        case "CLEAR_GRID":
            console.log("clear grid reduce")
            const newGrid = gridCreation(state.size)

            return {
                ...state,
                "grid": newGrid,
                "play" : false
            }
        case 'nextGeneration':
            console.log("nextGeneration")
            break
        
        case "updateSize":
            console.log("update size")
            return {
                ...state,
                "size": action.payload
            };
            
        
        case "CHANGE_CELL":

            return {
                ...state,
                "grid": state.grid
            };

        case "GENERATE_GRID":
            const genGrid = gridCreation(state.size)

            return {
                ...state,
                "grid": genGrid
            }

            

        default:
            return state
    }
}

export { reducer, initialState }