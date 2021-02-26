import React from "react"


const Cell = ({dispatch, cellItem}) => {

    const  {alive, x, y} = cellItem;


    return (
        <div className={`${alive ? "alive": ''} cell`} onClick={()=> dispatch({type: "changeCell", payload:{x,y}})}>
        </div>
    )

}


export default Cell