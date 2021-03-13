import React, { useContext } from "react"
import { GridContext } from "../util/context.js";


const Cell = ({cellItem}) => {
    const { updateCell } = useContext(GridContext);

    const  {alive, x, y} = cellItem;


    return (
        <div className={`${alive ? "alive": ''} cell`} onClick = { () => { updateCell(x,y)}} >
        </div>
    )

}


export default Cell