import React from 'react'
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';

export default function Buttons(props){

   

    const handleSelect = (evt) => {
        props.gridSize(evt);
    }

    
    return (
        <div className="center">
            <ButtonToolbar>
                <button className="btn btn-danger" onClick={props.playButton}>
                    Play
                </button>
                <button className="btn btn-danger" onClick={props.play}>
                    Next Gen
                </button>
                <button className="btn btn-danger" onClick={props.pauseButton}>
                    Pause
                </button>
                <button className="btn btn-danger" onClick={props.clear}>
                    Clear
                </button>
                <button className="btn btn-danger" onClick={props.slow}>
                    Slow
                </button>
                <button className="btn btn-danger" onClick={props.fast}>
                    Fast
                </button>
                <button className="btn btn-danger" onClick={props.seed}>
                    Random
                </button>
                <button className="btn btn-danger" onClick={props.glider}>
                    Glider Factory
                </button>

                <DropdownButton
                    title="Grid Size"
                    id="size-menu"
                    onSelect={handleSelect}
                    variant='danger'
                    
                >
                    <Dropdown.Item eventKey="1">25x25</Dropdown.Item>
                    <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                    <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                </DropdownButton>
            </ButtonToolbar>
        </div>
        )
    

}