import React from "react";
import { render, act, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GridProvider } from "./util/context";
import App from './App';

afterEach(()=>{
    cleanup()
})

test("app loads and has title",()=>{

    act(()=>{
        render(
            <GridProvider>
                <App/>
            </GridProvider>
        )
    })
    expect(screen.getByTestId("header").textContent).toBe("Game of Life")
})

test("test clear button", ()=>{
    act(()=>{
        render(
            <GridProvider>
                <App/>
            </GridProvider>
        )
    })

    act(()=>{
        userEvent.click(screen.getByText("Clear"))
    })

    expect(screen.getByTestId("generations").textContent).toContain("0")
})
