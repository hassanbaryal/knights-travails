class Node {
  constructor(x, y, node) {
    this.x = x;
    this.y = y;
    this.dom = node;
    this.tl = null;
    this.tr = null;
    this.rt = null;
    this.rb = null;
    this.br = null;
    this.bl = null;
    this.lb = null;
    this.lt = null;
  }

  setDOM(node) {
    this.dom = node;
  }

  setTL(node) {
    this.tl = node;
  }

  setTR(node) {
    this.tr = node;
  }

  setRT(node) {
    this.rt = node;
  }

  setRB(node) {
    this.rb = node;
  }

  setBR(node) {
    this.br = node;
  }

  setBL(node) {
    this.bl = node;
  }

  setLB(node) {
    this.lb = node;
  }

  setLT(node) {
    this.lt = node;
  }
}

// Creates a 2d Array of nodes that represent a chess board.
// Each node represents a space on a chess board, that points
// to other spaces according to the movements of a knight piece
function createNodeArray() {
  const nodeArray = [];
  for (let y = 0; y < 8; y += 1) {
    const tempArray = [];
    for (let x = 0; x < 8; x += 1) {
      const space = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
      const tempNode = new Node(x, y, space);
      tempArray.push(tempNode);
    }
    nodeArray.push(tempArray);
  }
  return nodeArray;
}

// Assigns each node/space pointers to other nodes/spaces
// if it adheres to the movements of a knight piece
function createGraph(nodeArray) {
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const temp = nodeArray[y][x];
      if ((x - 1) >= 0 && (y - 2) >= 0) temp.setTL(nodeArray[y - 2][x - 1]);
      if ((x + 1) < 8 && (y - 2) >= 0) temp.setTR(nodeArray[y - 2][x + 1]);
      if ((x + 2) < 8 && (y - 1) >= 0) temp.setRT(nodeArray[y - 1][x + 2]);
      if ((x + 2) < 8 && (y + 1) < 8) temp.setRB(nodeArray[y + 1][x + 2]);
      if ((x + 1) < 8 && (y + 2) < 8) temp.setBR(nodeArray[y + 2][x + 1]);
      if ((x - 1) >= 0 && (y + 2) < 8) temp.setBL(nodeArray[y + 2][x - 1]);
      if ((x - 2) >= 0 && (y + 1) < 8) temp.setLB(nodeArray[y + 1][x - 2]);
      if ((x - 2) >= 0 && (y - 1) >= 0) temp.setLT(nodeArray[y - 1][x - 2]);
    }
  }
}

// This function calculates the shortest path from the start position (signified by node),
// and the end position (signified by endPosition array).
// This utilizes a breadth first search algorithm
// (a depth first algorithm would cause an infinite loop of recursive calls).
function knightMoves(node, endPosition, cb = null, queue = [], traversalPath = []) {
  if (node.x === endPosition[0] && node.y === endPosition[1]) {
    traversalPath.push(node);
    return traversalPath;
  }
  if (queue.length < 1) {
    if (cb) cb(node);
    queue.push(node);
  }
  traversalPath.push(queue[0]);
  if (node.tl !== null) queue.push(node.tl);
  if (node.tr !== null) queue.push(node.tr);
  if (node.rt !== null) queue.push(node.rt);
  if (node.rb !== null) queue.push(node.rb);
  if (node.br !== null) queue.push(node.br);
  if (node.bl !== null) queue.push(node.bl);
  if (node.lb !== null) queue.push(node.lb);
  if (node.lt !== null) queue.push(node.lt);
  const found = queue.find((item) => (item.x === endPosition[0] && item.y === endPosition[1]));
  // If queue contains end position, return an array of
  // [node with position before end position, endPosition node]
  // BASE CASE! This will break the recursion
  if (found) {
    return [queue[0]].concat([found]);
  }
  const removedNode = queue.shift();
  const shortestPath = knightMoves(queue[0], endPosition, cb, queue, traversalPath);
  const removedNodeValues = Object.values(removedNode);
  if (removedNodeValues.includes(shortestPath[0])) {
    return [removedNode].concat(shortestPath);
  }
  return shortestPath;
}

export {
  Node, createNodeArray, createGraph, knightMoves,
};
