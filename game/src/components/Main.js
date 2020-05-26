import React, {useState} from 'react';
import Grid from './GridTwo.js';
import Box from './Box.js';
const Main = () => {
    const [state, setstate] = useState(0)
    const speed = 100;
    const rows = 30;
    const cols = 50;
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))
    return (
        <div>
            <h1> The Game Of Life</h1>
            <Grid
                gridFull={gridFull}
                rows={rows}
                cols={cols}
                selectBox={Box}
            />
            <h2>Generations: {state}</h2>
        </div>
    )
}
export default Main

