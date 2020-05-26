import React, { useState } from 'react';

const Width = 600
const Height = 600
const CellSize = 20



export default function Game(){
    [state, setState] = useState([]);
    const rows = Height / CellSize
    const cols = Width / CellSize
    const board = makeEmptyBoard();

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

    return(
        <div>
            <div className="board" style={{width: Width, height: Height, backgroundSize:`${CellSize}px ${CellSize}px`}}>
                
            </div>
        </div>
    )
}