import React, {useReducer, createContext} from "react"
import { reducer, initialState } from "./reducer.js";


const GridContext = createContext({
    "generation": 0,
    "size": 15,
    "grid": [],
    "play": false,
    "clearGrid" : () => {}
})



function GridProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function clearGrid() {
        dispatch({type: "CLEAR_GRID"})
    }
    
    function setPlay() {
        dispatch({type:"SET_PLAY"})
    }

    function changeSpeed(value) {
        dispatch({type:"SET_SPEED", payload: value})
    }

    function updateSize(size) {
        dispatch({type:"UPDATE_SIZE", payload: size})
    }

    function updateCell(x,y) {
        dispatch({type:"UPDATE_CELL", payload: [x,y] })
    }

    function nextGeneration(){
        dispatch({type : "NEXT_GENERATION"})
    }

    function generateSample(sample) {
        dispatch({type: "GENERATE_SAMPLE", payload: sample})
    }


    return (
        <GridContext.Provider
            value = {{state, clearGrid, setPlay, changeSpeed, updateSize, updateCell, nextGeneration, generateSample}}
            {...props}
        />
    )
}

export { GridProvider , GridContext }