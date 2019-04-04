export default class Graph {
  constructor() {
    this.AdjList = {}; 
  }

  addEdge(p, q) {
    p.addNeighbor(q);
  }

  addVertex(p) {
    this.AdjList[p.value] = p.neighbors;
  }

  getAllVertices() {
    var allVertices = [];
    for (k in this.AdjList) {
      allVertices.unshift(k);
    }
    return allVertices
  }

  toString() {
    for (k in this.AdjList) {
      console.log(`${this.AdjList[k]}`)
    }
  }
}