// https://www.flaticon.com/free-icon/strategy_1322213?term=chess-knight&related_id=1322213#
// https://www.flaticon.com/free-icon/goal_1694364?term=goal&page=1&position=3&page=1&position=3&related_id=1694364&origin=tag
import knight from '../assets/strategy.png';
import goal from '../assets/goal.png';

function activateButtons(btnToActivate) {
  const btns = document.querySelectorAll('button');
  btnToActivate.classList.toggle('active-btn');
  if (btnToActivate.classList.contains('active-btn')) {
    btns.forEach((btn) => {
      if (!btn.classList.contains('active-btn')) {
        // eslint-disable-next-line no-param-reassign
        btn.disabled = true;
      }
    });
  } else {
    btns.forEach((btn) => {
      if (!btn.classList.contains('active-btn')) {
        // eslint-disable-next-line no-param-reassign
        btn.disabled = false;
      }
    });
  }
}

function placeKnight(space) {
  const spaceWithKnight = document.querySelector('.knight-placed');
  if (spaceWithKnight) {
    spaceWithKnight.children[0].remove();
    spaceWithKnight.classList.toggle('knight-placed');
  }
  const knightImg = document.createElement('img');
  knightImg.src = knight;
  space.appendChild(knightImg);
  space.classList.toggle('knight-placed');
}

function placeGoal(space) {
  const spaceWithGoal = document.querySelector('.goal-placed');
  if (spaceWithGoal) {
    spaceWithGoal.children[0].remove();
    spaceWithGoal.classList.toggle('goal-placed');
  }
  const goalImg = document.createElement('img');
  goalImg.src = goal;
  space.appendChild(goalImg);
  space.classList.toggle('goal-placed');
}

function resetBoard() {
  const spaceWithKnight = document.querySelector('.knight-placed');
  const spaceWithGoal = document.querySelector('.goal-placed');
  if (spaceWithKnight) {
    spaceWithKnight.children[0].remove();
    spaceWithKnight.classList.toggle('knight-placed');
  }
  if (spaceWithGoal) {
    spaceWithGoal.children[0].remove();
    spaceWithGoal.classList.toggle('goal-placed');
  }
  // add code to remove move number spaces
}

const buttonsContainer = document.querySelector('.buttons');
const board = document.querySelector('.board');
// const placeKnightBtn = document.querySelector('.knight-btn');
// const goalBtn = document.querySelector('.goal-btn');
const resetBtn = document.querySelector('.reset-btn');
const travailBtn = document.querySelector('.travail-btn');

buttonsContainer.addEventListener('click', (e) => {
  let btn = e.target.closest('.knight-btn');
  if (!btn) btn = e.target.closest('.goal-btn');
  if (!btn) return;
  activateButtons(btn);
});

board.addEventListener('click', (e) => {
  const space = e.target.closest('.space');
  if (!space) return;
  const activeBtn = document.querySelector('.active-btn');
  if (!activeBtn) return;
  if (activeBtn.classList.contains('knight-btn')) {
    placeKnight(space);
  } else {
    placeGoal(space);
  }
  activateButtons(activeBtn);
});

resetBtn.addEventListener('click', () => {
  if (resetBtn.classList.contains('active-btn')) activateButtons(resetBtn);
  resetBoard();
});
