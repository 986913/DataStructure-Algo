class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

let g = new Graph();
g.addVertex("changan");
g.addVertex("beijin");

console.log(g);
