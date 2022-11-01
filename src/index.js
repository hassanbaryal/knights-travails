import './styles/style.css';
import './modules/board';
import { toggleError, activateButtons } from './modules/buttons';
import { createNodeArray, createGraph, knightMoves } from './modules/node';

function checkKnightAndGoal() {
  const knightSpace = document.querySelector('.knight-placed');
  const goalSpace = document.querySelector('.goal-placed');
  if (knightSpace && goalSpace) {
    return [[knightSpace.dataset.x, knightSpace.dataset.y],
      [goalSpace.dataset.x, goalSpace.dataset.y]];
  }
  return false;
}

function addMoveNumbersToBoard(shortestPath) {
  let move = 1;
  shortestPath.forEach((space) => {
    const moveNumberElement = `<p class="move-number" data-move="${move}">${move}</p>`;
    space.dom.insertAdjacentHTML('beforeend', moveNumberElement);
    move += 1;
  });
}

function travail(nodeArray, positions) {
  const startingNode = nodeArray[positions[0][1]][positions[0][0]];
  const endPosition = [Number(positions[1][0]), Number(positions[1][1])];
  const shortestPath = knightMoves(startingNode, endPosition);
  // Remove starting position
  shortestPath.shift();
  addMoveNumbersToBoard(shortestPath);
}

const travailBtn = document.querySelector('.travail-btn');
const nodeArray = createNodeArray();
createGraph(nodeArray);

travailBtn.addEventListener('click', () => {
  const positions = checkKnightAndGoal();
  if (positions) {
    travail(nodeArray, positions);
    activateButtons(document.querySelector('.reset-btn'));
  } else toggleError();
});
