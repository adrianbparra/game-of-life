import React from "react";
import { act, cleanup, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Buttons from "./Buttons";
import { GridContext } from "../util/context";



afterEach(()=>{
    cleanup()
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
        render(
            <GridContext.Provider value={value}>
                <Buttons/>
            </GridContext.Provider>
            );

    })
    expect(screen.getByTestId("gridSize").value).toBe("15");


})

test("presses all buttons",  () => {
    act(()=>{
        render(
            <GridContext.Provider value={value}>
                <Buttons/>
            </GridContext.Provider>
        )
        
    })

    act(()=>{
        userEvent.click(screen.getByTestId("clear"))
    })
    expect(value.clearGrid).toHaveBeenCalledTimes(1)

    act(()=>{
        userEvent.click(screen.getByTestId("play"))
    })
    expect(value.setPlay).toHaveBeenCalledTimes(1)

    act(()=>{
        userEvent.click(screen.getByTestId("next-gen"))
    })
    expect(value.nextGeneration).toHaveBeenCalledTimes(1)

})