export default class GraphVertex {
  constructor (value) {
    if (!value) {
      throw new Error("GraphVertex must have a value");
    }

    this.value = value;
    this.neighbors = [];
  } 

  getKey() {
    return this.value;
  }
  
  // getEdges() {
  //   return this.
  // }

  getNeighbors() {
    return this.neighbors;
  }

  addNeighbor(q) {
    this.neighbors.push(q);
    q.neighbors.push(this);
  }

  hasNeighbor(q) {
    return this.neighbors.indexOf(q) > -1;
  }

  toString() {
    return `${this.value} -> ${this.neighbors}`;
  }
}