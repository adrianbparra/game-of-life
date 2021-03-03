import React, {useReducer, createContext} from "react"
import { gridCreation } from "./gridCreation.js";
import { reducer, initialState } from "./reducer.js";


const GridContext = createContext({
    "generation": 0,
    "size": 15,
    "grid": gridCreation(15)
})



function GridProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);


    function clearGrid() {
        console.log("clear grid provider")
        dispatch({type: "CLEAR_GRID"})
    }


    return (
        <GridContext.Provider
            value = {{state, clearGrid}}
            {...props}
        />
    )
}

export { GridProvider }