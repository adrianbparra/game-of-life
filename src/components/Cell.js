import React from "react"


const Cell = ({dispatch, cellItem}) => {

    const  {alive, x, y} = cellItem;


    return (
        <div className={`${alive ? "alive": ''} cell`} >
        </div>
    )

}


export default Cell