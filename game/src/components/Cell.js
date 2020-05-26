import React from 'react';

const CellSize = 20


export default function Cell({x,y}){


    return(
        <div className='cell' style={{left: `${CellSize * x + 1}`, top: `${CellSize * y + 1}`, width: `${CellSize - 1}px`, height: `${CellSize -1}px`}}>

        </div>
    )
}