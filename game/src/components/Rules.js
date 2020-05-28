import React from 'react';


function Rules(){

    return(
        <div className="right">
        <h2>The Rules</h2>
            <ol>
                <li>If a cell is alive and has 2 or 3 neighbors that are alive. Then it remains alive.</li>
                <li>If the cell is dead and has EXACTLY 3 alive neighbors then it comes to life. Else it remains dead.</li>
                <li>For each cell it checks the cell's eight neighbors. They are: up, down, left, right and the diagonals</li>
                <li>Neighbor cells end at each edge of the grid</li>
            </ol>
        </div>
    )
}

export default Rules