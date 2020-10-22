import React from "react"


const Cell = ({changeCell, cell}) => {

    const  {alive, x, y} = cell;


    return (
        <div key={x + y} className={`${alive ? "alive": ''} cell`} onClick={()=> changeCell({x,y})}>

        </div>
    )

}


export default Cell