import React, {useState, useEffect, useRef} from 'react';
import Grid from './GridTwo.js';
import Box from './Box.js';
import Buttons from './Buttons.js';
// import {useInterval} from './useInterval.js';

class Main extends React.Component {
	constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
	}

	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
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
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 1000;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
	}

	gridSize = (size) => {
		switch (size) {
			case "1":
				this.cols = 20;
				this.rows = 10;
			break;
			case "2":
				this.cols = 50;
				this.rows = 30;
			break;
			default:
				this.cols = 70;
				this.rows = 50;
		}
		this.clear();

	}

	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}

	componentDidMount() {
		this.seed();
		this.playButton();
	}

	render() {
		return (
			<div>
				<h1>The Game of Life</h1>
				<Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					fast={this.fast}
					clear={this.clear}
					seed={this.seed}
					gridSize={this.gridSize}
				/>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>
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

