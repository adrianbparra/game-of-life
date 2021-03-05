import { gridCreation } from "./gridCreation.js";

const initialState = {
    "generation": 0,
    "size": 15,
    "grid": gridCreation(15),
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
            var newGrid = gridCreation(state.size)

            return {
                ...state,
                "grid": newGrid,
                "play" : false
            }
        case "UPDATE_SIZE":
            console.log("update size")

            newGrid = gridCreation(action.payload)

            return {
                ...state,
                "size" : action.payload,
                "grid" : newGrid
            }

        case 'nextGeneration':
            console.log("nextGeneration")
            break
        
        // case "updateSize":
        //     console.log("update size")
        //     return {
        //         ...state,
        //         "size": action.payload
        //     };
            
        
        case "CHANGE_CELL":

            newGrid = gridCreation(state.size)


            return {
                ...state,
                "grid": state.grid
            };

        case "GENERATE_GRID":
            newGrid = gridCreation(state.size)

            return {
                ...state,
                "grid": newGrid
            }

            

        default:
            return state
    }
}

export { reducer, initialState }