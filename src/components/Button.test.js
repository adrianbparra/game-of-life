import React from "react";
import ReactDOM,{ unmountComponentAtNode } from "react-dom";
import { act, fireEvent } from "@testing-library/react";

import Buttons from "./Buttons";
import { GridContext } from "../util/context";


let container = null;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

var value = {
    "state" :{
        "generation": 0,
        "size": 15,
        "grid": [],
        "play": false,
        "clearGrid" : () => {}
    },
    "setPlay" : jest.fn(),
    "clearGrid" : jest.fn(),
    "changeSpeed" : jest.fn(),
    "updateSize" : jest.fn(),
    "nextGeneration" : jest.fn(),
    
}

test("renders with defaul size", ()=>{
    act(()=>{
        ReactDOM.render(
            <GridContext.Provider value={value}>
                <Buttons/>
            </GridContext.Provider>
        ,container);

    })
    expect(container.querySelector("#gridSize").value).toBe("15");


})

test("presses all buttons",  () => {
    act(()=>{
        ReactDOM.render(
            <GridContext.Provider value={value}>
                <Buttons/>
            </GridContext.Provider>
        ,container)
        
    })

    act(()=>{
        fireEvent.click(container.querySelector(".clear"))
        expect(value.clearGrid).toHaveBeenCalledTimes(1)
    })

    act(()=>{
        fireEvent.click(container.querySelector(".play"))
        expect(value.setPlay).toHaveBeenCalledTimes(1)
    })

    act(()=>{
        fireEvent.click(container.querySelector(".next-gen"))
        expect(value.nextGeneration).toHaveBeenCalledTimes(1)
    })

})