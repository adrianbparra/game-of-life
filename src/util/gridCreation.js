function gridCreation(gridSize) {

    const grid = []
      
        for(let i = 0; i < gridSize; i++){
    
            const row = []
            for(let j = 0; j < gridSize; j++){
                
                const col = {'alive': false, 'x' : j,'y' : i}
                row.push(col)
    
            }
    
            grid.push(row)
    
        }

      return grid
}  

function nextGeneration(grid) {
    
    const copyGrid = [...grid]
    // console.log(copyGrid)

    const newGrid = []

    for(let i = 0; i < copyGrid.length; i++){
    
        const row = []
        for(let j = 0; j < copyGrid[i].length; j++){
            
            // const col = {'alive': false, 'x' : j,'y' : i}
            // check the values here and update the cell
            // we only update this cell based on other cells around it

            
            const col = {'alive': false, 'x' : j,'y' : i}
            
            
            // if there is more than 4 neighbours continue to next j since cell will
            // dead
            // adding up live neighbours
            var liveNeighbours = 0
            // top
            if (i - 1 >= 0 && j-1 >= 0 && copyGrid[i-1][j-1].alive){

                liveNeighbours += 1
            }
            if (i - 1 >= 0 && copyGrid[i-1][j].alive){
                liveNeighbours += 1
            }
            if ( i - 1 >= 0 && j+1 < copyGrid[i].length && copyGrid[i-1][j+1].alive){
                liveNeighbours += 1
            }

            // center
            if (j - 1 >= 0&& copyGrid[i][j-1].alive){
                liveNeighbours += 1
            }

            if (j+1 < copyGrid[i].length && copyGrid[i][j+1].alive){
                liveNeighbours += 1
            }

            // bottom
            if (i + 1 < copyGrid.length && j-1 >= 0 && copyGrid[i+1][j-1].alive){
                liveNeighbours += 1
            }
            if (i + 1 < copyGrid.length && copyGrid[i+1][j].alive){
                liveNeighbours += 1
            }
            if (i + 1 < copyGrid.length && j+1 < copyGrid[i].length && copyGrid[i+1][j+1].alive){
                liveNeighbours += 1
            }

            // current cell alive
            if (copyGrid[i][j].alive) {
                
                // two or three live neighbours lives on to the next generation.
                // fewer than two live neighbours dies, as if by underpopulation.
                // more than three live neighbours dies, as if by overpopulation.
                if (liveNeighbours === 2 || liveNeighbours === 3) {
                    // cell keeps living
                    col.alive = true
                }

            } else {
                // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                if (liveNeighbours === 3){
                    col.alive = true
                }
            }

        

            row.push(col)

        }

        newGrid.push(row)

    }

    return newGrid
}


export { gridCreation,nextGeneration }