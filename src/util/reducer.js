import { gridCreation, nextGeneration, sampleCreation } from "./gridCreation.js";

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
            var newGrid = gridCreation(state.size)
            console.log("clear")
            return {
                ...state,
                "generation": 0,
                "grid": newGrid,
                "play" : false
            }

        case "UPDATE_SIZE":
            newGrid = gridCreation(action.payload)

            return {
                ...state,
                "size" : action.payload,
                "grid" : newGrid
            }

        case "UPDATE_CELL":
            newGrid = JSON.parse(JSON.stringify(state.grid));
            const [x, y] = action.payload;
                
            if (!state.play){
                newGrid[y][x].alive = !newGrid[y][x].alive;
            }

            return {
                ...state,
                "grid": newGrid
            }

        case 'NEXT_GENERATION':
            const nextgen = nextGeneration(state.grid)

            console.log("payload",action.payload)
            console.log("gen",nextgen.changed)

            return {
                ...state,
                "generation": nextgen.changed ? state.generation + 1: state.generation,
                "grid" : nextgen.newGrid,
                "play" : action.payload === "NEXT GEN" ? false : nextgen.changed
            };

        case "GENERATE_GRID":
            newGrid = gridCreation(state.size)

            return {
                ...state,
                "grid": newGrid
            }

        case "GENERATE_SAMPLE":
            const gridCopy = JSON.parse(JSON.stringify(state.grid));

            newGrid = sampleCreation(action.payload, gridCopy, state.size)

            return {
                ...state,
                "grid": newGrid
            }

        default:
            return state
    }
}

export { reducer, initialState }