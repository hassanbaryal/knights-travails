function createBoard() {
  const board = document.querySelector('.board');
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const space = `<div class="space" data-x="${x}" data-y="${y}"></div>`;
      board.insertAdjacentHTML('beforeend', space);
    }
  }
}

createBoard();
