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

function knightMoves(startPosition, endPosition) {
  console.log(startPosition);
  console.log(endPosition);
}

export { Node, knightMoves };
