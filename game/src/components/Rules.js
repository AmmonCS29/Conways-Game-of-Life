import React from 'react';


function Rules(){

    return(
        <div className="right">
        <h2>The Rules</h2>
            <ol>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                <li>Assume cells beyond the boundary are always dead.</li>
            </ol>
        </div>
    )
}

export default Rules