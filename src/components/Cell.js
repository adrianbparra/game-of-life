import React from "react"


const Cell = ({changeCell, cellItem}) => {

    const  {alive, x, y} = cellItem;


    return (
        <div className={`${alive ? "alive": ''} cell`} onClick={()=> changeCell({x,y})}>
        </div>
    )

}


export default Cell