import React from "react"


const Cell = (props) => {

    const  {alive, x, y} = props.cell;
    const changeState = props.changeState;
    // console.log(props.cell)

    return (
        <div key={x + y} className={`${alive ? "alive": ''} cell`} onClick={()=> changeState({x,y})}>

        </div>
    )

}


export default Cell