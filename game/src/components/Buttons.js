import React from 'react'
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';

export default function Buttons(props){

   

    const handleSelect = (evt) => {
        props.gridSize(evt);
    }

    
    return (
        <div className="center">
            <ButtonToolbar>
                <button className="btn btn-default" onClick={props.playButton}>
                    Play
                </button>
                <button className="btn btn-default" onClick={props.pauseButton}>
                    Pause
                </button>
                <button className="btn btn-default" onClick={props.clear}>
                    Clear
                </button>
                <button className="btn btn-default" onClick={props.slow}>
                    Slow
                </button>
                <button className="btn btn-default" onClick={props.fast}>
                    Fast
                </button>
                <button className="btn btn-default" onClick={props.seed}>
                    Seed
                </button>
                <DropdownButton
                    title="Grid Size"
                    id="size-menu"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                    <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                    <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                </DropdownButton>
            </ButtonToolbar>
        </div>
        )
    

}