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

    const newGrid = []

    for(let i = 0; i < copyGrid.length; i++){
    
        const row = []
        for(let j = 0; j < copyGrid[i].length; j++){
            
            
            const col = {'alive': false, 'x' : j,'y' : i}
              
            var liveNeighbours = 0

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
                
                if (liveNeighbours === 2 || liveNeighbours === 3) {

                    col.alive = true
                }

            } else {

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

    if (samples.hasOwnProperty(sample)){

        const {x,y,location} = samples[sample]

        if (gridSize < x || gridSize < y){
            const minSize = Math.max(x,y)
            gridSize = minSize

            grid = gridCreation(gridSize)
        }

        const randomX = Math.floor(Math.random() * (gridSize - x))
        const randomY = Math.floor(Math.random() * (gridSize - y))

        const newGrid = [...grid]
        
        for (const loc of location) {

            const cell = newGrid[loc[0]+randomY][loc[1]+randomX]

            cell.alive = true
        }

        return newGrid

    } else {
        return grid
    }



}

export { gridCreation,nextGeneration, sampleCreation }