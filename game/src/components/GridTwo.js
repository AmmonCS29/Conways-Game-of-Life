import React from 'react';
import Box from './Box.js';

export default function GridTwo(props){
    const Width = (props.cols * 14);
    let rowsArr = [];
    var boxClass = "";
    for (let i = 0; i < props.rows; i++){
        for (let j = 0; j < props.cols; j++){
            let boxId = i + "_" + j;
            boxClass = props.gridFull[i][j] ? "box on" : "box off";
            rowsArr.push(
                <Box 
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    row={i}
                    col={j}
                    selectBox={props.selectBox}
                />
            )
        }
    }

    return(
        <div className="grid" style={{width: Width}}>
            {rowsArr}
        </div>
    )
}