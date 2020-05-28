import React, {useState, useEffect, useRef} from 'react';
import Grid from './GridTwo.js';
import Box from './Box.js';
import Buttons from './Buttons.js';
import Rules from './Rules.js'
// import {useInterval} from './useInterval.js';

class Main extends React.Component {
	constructor() {
		super();
		this.speed = 500;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			//This creates the grid which is a multidimentional array.
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
		//Clone the original grid
		let gridCopy = arrayClone(this.state.gridFull);
		//based on the click it will turn the box on the grid from true to false or vice versa
		gridCopy[row][col] = !gridCopy[row][col];
		//setting the state to the current copy
		this.setState({
			gridFull: gridCopy
		});
	}

	seed = () => {
		//clones the initial grid.
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			//loops through the rows and columns
			for (let j = 0; j < this.cols; j++) {
				//Gives each square in the grid a 25% chance of being turned true or on
				if (Math.floor(Math.random() * 4) === 1) { 
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
	}

	

	playButton = () => {
		//clearInterval and setInterval are built in window javascript functions.
		clearInterval(this.intervalId); //clears the interval as it is running. 
		this.intervalId = setInterval(this.play, this.speed);//creates the interval at which it automatically plays at the speed set above. 
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		// changes the speed
		this.speed = 1000;
		// initializes the playbutton with the new speed set on line 57
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		//Creates a new empty grid
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		//sets the state to the new empty grid and generation back to 0
		this.setState({
			gridFull: grid,
			generation: 0
		});
		this.pauseButton();
	}

	gridSize = (size) => {
		//switch case statement that sets the size of the columns and rows. And then the clear is called to set the grid to be empty and generations back to zero. 
		switch (size) {
			case "1":
				this.cols = 25;
				this.rows = 25;
			break;
			case "2":
				this.cols = 50;
				this.rows = 30;
			break;
			default:
				this.cols = 70;
				this.rows = 50;
		}
		//updates the cols and rows in the grid inside the clear function to be the size set above based of the selection.
		this.clear();

	}

	play = () => {
		//This is where the double buffering takes place. 
		let g = this.state.gridFull; // using the current state of the grid
		let g2 = arrayClone(this.state.gridFull); // creating a second copy of the grid. 

		// Going to iterate over every element in the grid
		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
			let count = 0; //How many neighbors each cell has.
			//This is how you check each neighbor. 
			//If there is a neighbor then it adds to the count. 
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
			if (i < this.rows - 1 && j < this.cols - 1) 
				if (g[i + 1][j + 1]) 
					count++;
			// Then you decide if its going to die or live
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false; //Stays dead or dies
		    if (!g[i][j] && count === 3) g2[i][j] = true; //comes to life or stays alive
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}
	glider= () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for(let i = 0; i < this.rows; i++){
			for (let j=0; j < this.cols; j++){
				if(gridCopy[i][j] === gridCopy[4][1]){
					gridCopy[4][1] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][1]){
					gridCopy[5][1] = true;
				}
				else if(gridCopy[i][j] === gridCopy[4][2]){
					gridCopy[4][2] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][2]){
					gridCopy[5][2] = true;
				}
				else if(gridCopy[i][j] === gridCopy[4][11]){
					gridCopy[4][11] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][11]){
					gridCopy[5][11] = true;
				}
				else if(gridCopy[i][j] === gridCopy[6][11]){
					gridCopy[6][11] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][12]){
					gridCopy[3][12] = true;
				}
				else if(gridCopy[i][j] === gridCopy[7][12]){
					gridCopy[7][12] = true;
				}
				else if(gridCopy[i][j] === gridCopy[8][13]){
					gridCopy[8][13] = true;
				}
				else if(gridCopy[i][j] === gridCopy[8][14]){
					gridCopy[8][14] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][13]){
					gridCopy[2][13] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][14]){
					gridCopy[2][14] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][15]){
					gridCopy[5][15] = true;
				}
				else if(gridCopy[i][j] === gridCopy[7][16]){
					gridCopy[7][16] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][16]){
					gridCopy[3][16] = true;
				}
				else if(gridCopy[i][j] === gridCopy[4][17]){
					gridCopy[4][17] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][17]){
					gridCopy[5][17] = true;
				}
				else if(gridCopy[i][j] === gridCopy[6][17]){
					gridCopy[6][17] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][18]){
					gridCopy[5][18] = true;
				}
				else if(gridCopy[i][j] === gridCopy[4][21]){
					gridCopy[4][21] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][21]){
					gridCopy[3][21] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][21]){
					gridCopy[2][21] = true;
				}
				else if(gridCopy[i][j] === gridCopy[4][22]){
					gridCopy[4][22] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][22]){
					gridCopy[3][22] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][22]){
					gridCopy[2][22] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][23]){
					gridCopy[5][23] = true;
				}
				else if(gridCopy[i][j] === gridCopy[1][23]){
					gridCopy[1][23] = true;
				}
				else if(gridCopy[i][j] === gridCopy[1][25]){
					gridCopy[1][25] = true;
				}
				else if(gridCopy[i][j] === gridCopy[0][25]){
					gridCopy[0][25] = true;
				}
				else if(gridCopy[i][j] === gridCopy[5][25]){
					gridCopy[5][25] = true;
				}
				else if(gridCopy[i][j] === gridCopy[6][25]){
					gridCopy[6][25] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][35]){
					gridCopy[2][35] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][35]){
					gridCopy[3][35] = true;
				}
				else if(gridCopy[i][j] === gridCopy[2][36]){
					gridCopy[2][36] = true;
				}
				else if(gridCopy[i][j] === gridCopy[3][36]){
					gridCopy[3][36] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		})
	}

	// componentDidMount() {
	// 	this.seed();
	// }

	render() {
		return (
			<div className="flex">
				<div className="left">
					<h1>The Game of Life</h1>
					<Buttons
						playButton={this.playButton}
						pauseButton={this.pauseButton}
						slow={this.slow}
						fast={this.fast}
						clear={this.clear}
						seed={this.seed}
						gridSize={this.gridSize}
						play={this.play}
						glider={this.glider}
					/>
					<h2>Generations: {this.state.generation}</h2>
					<Grid
						gridFull={this.state.gridFull}
						rows={this.rows}
						cols={this.cols}
						selectBox={this.selectBox}
					/>
					
				</div>
				<div >
					<Rules />
				</div>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default Main;

// const Main = () => {
//     const [state, setState] = useState(0)
//     let speed = 100;
//     let rows = 30;
//     let cols = 50;
//     const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))

//     const selectBox = (row, col) => {
//         let gridCopy = arrayClone(gridFull);
//         gridCopy[row][col] = !gridCopy[row][col];
//         setGridFull(gridCopy)
//     }

//     const seed = () => {
// 		let gridCopy = arrayClone(gridFull);
// 		for (let i = 0; i < rows; i++) {
// 			for (let j = 0; j < cols; j++) {
// 				if (Math.floor(Math.random() * 4) === 1) {
// 					gridCopy[i][j] = true;
// 				}
// 			}
// 		}
// 		setGridFull(gridFull);
// 	}

// 	const playButton = () => {
//         const intervalId = useInterval(play, speed);
//         // const intervalId = setInterval(play, speed);
//         clearInterval(intervalId);
// 	}

// 	const pauseButton = () => {
//         const intervalId = useInterval(play, speed);
//         // const intervalId = setInterval(play, speed);
// 		clearInterval(intervalId);
// 	}

// 	const slow = () => {
// 		speed = 1000;
// 		playButton();
// 	}

// 	const fast = () => {
// 		speed = 100;
// 		playButton();
// 	}

// 	const clear = () => {
// 		var grid = Array(rows).fill().map(() => Array(cols).fill(false));
//         setState(0);
//         setGridFull(grid)
        
// 	}

// 	const gridSize = (size) => {
// 		switch (size) {
// 			case "1":
// 				cols = 20;
// 				rows = 10;
// 			break;
// 			case "2":
// 				cols = 50;
// 				rows = 30;
// 			break;
// 			default:
// 				cols = 70;
// 				rows = 50;
// 		}
// 		clear();

// 	}

// 	const play = () => {
// 		let g = gridFull;
// 		let g2 = arrayClone(gridFull);

// 		for (let i = 0; i < rows; i++) {
// 		  for (let j = 0; j < cols; j++) {
// 		    let count = 0;
// 		    if (i > 0) if (g[i - 1][j]) count++;
// 		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
// 		    if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
// 		    if (j < cols - 1) if (g[i][j + 1]) count++;
// 		    if (j > 0) if (g[i][j - 1]) count++;
// 		    if (i < rows - 1) if (g[i + 1][j]) count++;
// 		    if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
// 		    if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
// 		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
// 		    if (!g[i][j] && count === 3) g2[i][j] = true;
// 		  }
//         }
//         setGridFull(g2)
//         setState(state + 1)
// 		// setState({
// 		//   gridFull: g2,
// 		//   generation:  + 1
// 		// });

// 	}
//     useEffect(() => {
//         seed();
//         playButton();
        
//     }, [seed, playButton])

//     return (
//         <div>
//             <h1> The Game Of Life</h1>
//             <Buttons
// 					playButton={playButton}
// 					pauseButton={pauseButton}
// 					slow={slow}
// 					fast={fast}
// 					clear={clear}
// 					seed={seed}
// 					gridSize={gridSize}
// 				/>
//             <Grid
//                 gridFull={gridFull}
//                 rows={rows}
//                 cols={cols}
//                 selectBox={selectBox}
//             />
//             <h2>Generations: {state}</h2>
//         </div>
//     )
// }

// function useInterval(callback, delay) {
//     const savedCallback = useRef();
  
//     // Remember the latest callback.
//     useEffect(() => {
//       savedCallback.current = callback;
//     }, [callback]);
  
//     // Set up the interval.
//     useEffect(() => {
//       function tick() {
//         savedCallback.current();
//       }
//       if (delay !== null) {
//         let id = setInterval(tick, delay);
//         return () => clearInterval(id);
//       }
//     }, [delay]);
//   }

// function arrayClone(arr){
//     return JSON.parse(JSON.stringify(arr));
// }

// export default Main

