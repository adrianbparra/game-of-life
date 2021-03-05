import React, {useReducer, createContext} from "react"
import { gridCreation } from "./gridCreation.js";
import { reducer, initialState } from "./reducer.js";


const GridContext = createContext({
    "generation": 0,
    "size": 15,
    "grid": [],
    "clearGrid" : ()=>{}
})



function GridProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);


    function clearGrid() {
        console.log("clear grid provider")
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


    return (
        <GridContext.Provider
            value = {{state, clearGrid, setPlay, changeSpeed, updateSize}}
            {...props}
        />
    )
}

export { GridProvider , GridContext }