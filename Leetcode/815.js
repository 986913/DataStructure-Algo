const numBusesToDestination = (routes, source, target) => {
  const graph = {};

  // build graph where buses and stops are connecting nodes
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const bus = i;
    for (let j = 0; j < route.length; j++) {
      const stop = route[j];
      const busId = `b${bus}`;
      graphSet(graph, stop, busId);
      graphSet(graph, busId, stop);
    }
  }

  const visited = new Set();
  const q = [[source, 0]];

  // perform BFS on graph to find minimal distance
  while (q.length) {
    let [point, distance] = q.shift();

    // target reached
    if (point === target) return distance;

    // prevent visiting the same stop or bus
    if (visited.has(point)) continue;
    visited.add(point);

    // visiting a bus node has an edge weight of 1
    if (typeof point === 'string') distance += 1;

    // consider all connections of current point
    for (const connection of graph[point]) {
      q.push([connection, distance]);
    }
  }
  // no possible route to target
  return -1;
};

function graphSet(graph, key, value) {
  if (key in graph) {
    graph[key].push(value);
  } else {
    graph[key] = [value];
  }
}
