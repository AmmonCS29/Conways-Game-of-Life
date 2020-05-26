import React, { useState } from 'react';
import Cell from './Cell.js';

const Width = 600
const Height = 600
const CellSize = 20



export default function Grid(){
    const [state, setState] = useState([]);
    const rows = Height / CellSize;
    const cols = Width / CellSize;
    const board = makeEmptyBoard();
    let boardRef;

    function makeEmptyBoard(){
        let board = [];
        for (let y = 0; y < rows; y++){
            board[y] =[];
            for (let x = 0; x < cols; x++){
                board[y][x] = false;
            }
        }
        return board
    }

    const makeCells = () => {
        let cells = []
        for (let y = 0; y < rows; y++){
            for (let x = 0; x < cols; x++){
                if(board[y][x]){
                    cells.push({x,y}) 
                }
            }
        }
    }

    const getElementOffset = () => {
        const rect = boardRef.getBoundingClientRect();
        const doc = document.documentElement
        return { x: (rect.left + window.pageXOffset) - doc.clientLeft, y: (rect.top + window.pageYOffset) - doc.clientTop,};  
    }

    const handleClick = (event) => {    
        const elemOffset = getElementOffset();    
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;        
        const x = Math.floor(offsetX / CellSize);    
        const y = Math.floor(offsetY / CellSize);
        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.row){
            board[y][x] = !board[y][x];
        }
        setState(makeCells())
    }
    return(
        <div>
            <div className="board" style={{width: Width, height: Height, backgroundSize:`${CellSize}px ${CellSize}px`}} onClick={handleClick} ref={(n) => {boardRef = n;}}>
                {state.map(cell => {
                    return(<Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`}/> )
                })}
            </div>
        </div>
    )
}

