# Conways Game of Life

Conway's Game of Life is a deceptively simple simulation of an environment where simple rules produce great complexity over time. The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is the best-known example of a cellular automaton.

The game is actually a zero-player game, meaning that its evolution is determined by its initial state, needing no input from human players. One interacts with the The Game of Life by creating an initial configuration and observing how it evolves.

***

## Cellular Automata

A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.

## Explanation  

A `Cell` is represented by a `1` when alive, or `0` when dead, in an `m-by-m` or `m×m` square array of cells.
We calculate `Neighbors` - the sum of live cell's in `Cell's` eight-location neighbourhood, then cell `Cell` is alive or dead in the next generation based on the following table:

| Cell | Neighbors             |  New | Cell  |   
|---|---------------|------|--------|
|1  |0,1            |0     |Lonely |
|1  |4,5,6,7,8      |0     |Overcrowded |
|1  |2,3            |1     |Lives |
|0  |3              |1     |It takes three to give birth!|
|0  |0,1,2,4,5,6,7,8|0     |Barren|

***

## Rules

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
5. Assume cells beyond the boundary are always dead.