import samples from "./samples";

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


function sampleCreation(sample, grid,gridSize) {
    // does it matter what sample it is here?
    // sample is the string of what sample it is
    // how would it match the string to the object of the sample

    // check is sample is in object?
    if (samples.hasOwnProperty(sample)){

        // get random values on where the sample will be displayed
        // minus the size of the sample
        // console.log(gridSize)
        const {x,y,location} = samples[sample]
        // if grid is smaller than minSize
            // create a new grid with size 2x
        if (gridSize < x || gridSize < y){
            // console.log("grid smaller")
            const minSize = Math.max(x,y)
            gridSize = minSize

            grid = gridCreation(gridSize)
        }

        const randomX = Math.floor(Math.random() * (gridSize - x))
        const randomY = Math.floor(Math.random() * (gridSize - y))

        // console.log(randomX, randomY)

        // loop over grid
        const newGrid = [...grid]
        
        // loop on location for grid instead and update values
        console.log("random",randomX,randomY)

        for (const loc of location) {
            console.log("location",loc[0],loc[1])

            const cell = newGrid[loc[0]+randomY][loc[1]+randomX]

            cell.alive = true
        }

        return newGrid

    } else {
        return grid
    }



}

export { gridCreation,nextGeneration, sampleCreation }