// Problem: 
// Given array of arrays representing a lot of land
// 9 represents destination, 1 represents paths, 2 represents obstacles
// start from top left, find the shortest number of steps from top left 1 to 9 (only 1) in graph

// Problem abstraction: given array of arrays, turn into unweighted digraph
// Represented by adjacency list
// Then return all paths from p(top left 1) to q (the only 9 in the graph)

// Create graph api that takes an array of arrays and returns an 
// adjacency list representation of the graph 
// Methods: toString() (to verify whether graph created correctly)
// findShortestPath(p, q)