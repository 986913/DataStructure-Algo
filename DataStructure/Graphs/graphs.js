class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else if (!this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = [vertex2];
      this.adjacencyList[vertex2].push(vertex1);
    } else if (this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2] = [vertex1];
    } else {
      this.adjacencyList[vertex1] = [vertex2];
      this.adjacencyList[vertex2] = [vertex1];
    }
  }
}

let g = new Graph();
g.addVertex("changan");
g.addVertex("beijing");
g.addEdge("changan", "beijing");
g.addEdge("xian", "detroit");
g.addEdge("xian", "beijing");
g.addEdge("xian", "changan");
console.log(g);
