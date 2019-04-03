import GraphVertex from './GraphVertex.js'
import Graph from './Graph.js'

describe('graph', () => {
  it('should add vertices to graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');

    graph.addVertex(vertexA)

    expect(graph.toString()).toBe('A -> ');
    expect(graph.getVertexByKey(vertexA.getKey())).toEqual(vertexA);
  });

  it('should add edges to undirected graph', () => {
    const graph = new Graph();

    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    graph.addEdge(vertexA, vertexB);

    expect(graph.getAllVertices().length).toBe(2);
    expect(graph.getAllVertices()[0]).toEqual(vertexA);
    expect(graph.getAllVertices()[1]).toEqual(vertexB);

    const graphVertexA = graph.getVertexByKey(vertexA.getKey());
    const graphVertexB = graph.getVertexByKey(vertexB.getKey());

    expect(graph.toString()).toBe('A,B');
    expect(graphVertexA).toBeDefined();
    expect(graphVertexB).toBeDefined();

    expect(graph.getVertexByKey('not existing')).toBeUndefined();

    expect(graphVertexA.getNeighbors().length).toBe(1);
    expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB);
    expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB);

    expect(graphVertexB.getNeighbors().length).toBe(1);
    expect(graphVertexB.getNeighbors()[0]).toEqual(vertexA);
    expect(graphVertexB.getNeighbors()[0]).toEqual(graphVertexA);
  });
})


describe('GraphVertex', () => {
  it('should throw an error when trying to create vertex without value', () => {
    let vertex = null;

    function createEmptyVertex() {
      vertex = new GraphVertex();
    }

    expect(vertex).toBeNull();
    expect(createEmptyVertex).toThrow();
  });

  it('should create graph vertex', () => {
    const vertex = new GraphVertex('A');

    expect(vertex).toBeDefined();
    expect(vertex.value).toBe('A');
    expect(vertex.toString()).toBe('A -> ');
    expect(vertex.getKey()).toBe('A');
    // expect(vertex.getEdges()).toBe('');
    expect(vertex.getNeighbors()).toEqual([]);
  });

  it('should add neighbors to vertex and check if it exists', () => {
    const vertexA = new GraphVertex('A');
    const vertexB = new GraphVertex('B');

    vertexA.addNeighbor(vertexB);

    expect(vertexA.hasNeighbor(vertexB)).toBe(true);
    expect(vertexB.hasNeighbor(vertexA)).toBe(true);
    expect(vertexA.getNeighbors().length).toBe(1);
  });

  // it('should delete edges from vertex', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   const edgeAC = new GraphEdge(vertexA, vertexC);
  //   vertexA
  //     .addEdge(edgeAB)
  //     .addEdge(edgeAC);

  //   expect(vertexA.hasEdge(edgeAB)).toBe(true);
  //   expect(vertexB.hasEdge(edgeAB)).toBe(false);

  //   expect(vertexA.hasEdge(edgeAC)).toBe(true);
  //   expect(vertexC.hasEdge(edgeAC)).toBe(false);

  //   expect(vertexA.getEdges().length).toBe(2);

  //   expect(vertexA.getEdges()[0].toString()).toBe('A_B');
  //   expect(vertexA.getEdges()[1].toString()).toBe('A_C');

  //   vertexA.deleteEdge(edgeAB);
  //   expect(vertexA.hasEdge(edgeAB)).toBe(false);
  //   expect(vertexA.hasEdge(edgeAC)).toBe(true);
  //   expect(vertexA.getEdges()[0].toString()).toBe('A_C');

  //   vertexA.deleteEdge(edgeAC);
  //   expect(vertexA.hasEdge(edgeAB)).toBe(false);
  //   expect(vertexA.hasEdge(edgeAC)).toBe(false);
  //   expect(vertexA.getEdges().length).toBe(0);
  // });

  // it('should delete all edges from vertex', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   const edgeAC = new GraphEdge(vertexA, vertexC);
  //   vertexA
  //     .addEdge(edgeAB)
  //     .addEdge(edgeAC);

  //   expect(vertexA.hasEdge(edgeAB)).toBe(true);
  //   expect(vertexB.hasEdge(edgeAB)).toBe(false);

  //   expect(vertexA.hasEdge(edgeAC)).toBe(true);
  //   expect(vertexC.hasEdge(edgeAC)).toBe(false);

  //   expect(vertexA.getEdges().length).toBe(2);

  //   vertexA.deleteAllEdges();

  //   expect(vertexA.hasEdge(edgeAB)).toBe(false);
  //   expect(vertexB.hasEdge(edgeAB)).toBe(false);

  //   expect(vertexA.hasEdge(edgeAC)).toBe(false);
  //   expect(vertexC.hasEdge(edgeAC)).toBe(false);

  //   expect(vertexA.getEdges().length).toBe(0);
  // });

  // it('should return vertex neighbors in case if current node is start one', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   const edgeAC = new GraphEdge(vertexA, vertexC);
  //   vertexA
  //     .addEdge(edgeAB)
  //     .addEdge(edgeAC);

  //   expect(vertexB.getNeighbors()).toEqual([]);

  //   const neighbors = vertexA.getNeighbors();

  //   expect(neighbors.length).toBe(2);
  //   expect(neighbors[0]).toEqual(vertexB);
  //   expect(neighbors[1]).toEqual(vertexC);
  // });

  // it('should return vertex neighbors in case if current node is end one', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeBA = new GraphEdge(vertexB, vertexA);
  //   const edgeCA = new GraphEdge(vertexC, vertexA);
  //   vertexA
  //     .addEdge(edgeBA)
  //     .addEdge(edgeCA);

  //   expect(vertexB.getNeighbors()).toEqual([]);

  //   const neighbors = vertexA.getNeighbors();

  //   expect(neighbors.length).toBe(2);
  //   expect(neighbors[0]).toEqual(vertexB);
  //   expect(neighbors[1]).toEqual(vertexC);
  // });

  // it('should check if vertex has specific neighbor', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   vertexA.addEdge(edgeAB);

  //   expect(vertexA.hasNeighbor(vertexB)).toBe(true);
  //   expect(vertexA.hasNeighbor(vertexC)).toBe(false);
  // });

  // it('should edge by vertex', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');
  //   const vertexC = new GraphVertex('C');

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   vertexA.addEdge(edgeAB);

  //   expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
  //   expect(vertexA.findEdge(vertexC)).toBeNull();
  // });

  // it('should calculate vertex degree', () => {
  //   const vertexA = new GraphVertex('A');
  //   const vertexB = new GraphVertex('B');

  //   expect(vertexA.getDegree()).toBe(0);

  //   const edgeAB = new GraphEdge(vertexA, vertexB);
  //   vertexA.addEdge(edgeAB);

  //   expect(vertexA.getDegree()).toBe(1);

  //   const edgeBA = new GraphEdge(vertexB, vertexA);
  //   vertexA.addEdge(edgeBA);

  //   expect(vertexA.getDegree()).toBe(2);

  //   vertexA.addEdge(edgeAB);
  //   expect(vertexA.getDegree()).toBe(3);

  //   expect(vertexA.getEdges().length).toEqual(3);
  // });
});
