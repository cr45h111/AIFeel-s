// MazePanel.js
// UI logic for Maze Training panel

const maze = new window.Maze();

function renderMazeGrid() {
  const grid = document.getElementById('maze-grid');
  grid.innerHTML = '';
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement('div');
      cell.style.width = '32px';
      cell.style.height = '32px';
      cell.style.border = '1px solid #1a2a3a';
      cell.style.background = maze.grid[y][x] === 1 ? '#222' : maze.grid[y][x] === 2 ? '#4488cc' : '#0b1118';
      cell.style.display = 'flex';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      if (maze.position.x === x && maze.position.y === y) {
        cell.style.background = '#00ffaa';
        cell.innerText = 'AI';
        cell.style.color = '#060a0f';
        cell.style.fontWeight = 'bold';
      }
      grid.appendChild(cell);
    }
  }
}

function updateMazeProgress() {
  document.getElementById('maze-progress').innerText = `Damage: ${maze.damage} | Steps: ${maze.history.length}`;
  document.getElementById('maze-lesson').innerText = `Lesson: ${maze.lesson}`;
}

function stepAI() {
  // Simple random step for demo
  const dirs = ['up','down','left','right'];
  maze.step(dirs[Math.floor(Math.random()*4)]);
  renderMazeGrid();
  updateMazeProgress();
}

function startMaze() {
  maze.reset();
  renderMazeGrid();
  updateMazeProgress();
}

function finishMaze() {
  maze.finished = true;
  updateMazeProgress();
  // Show reward modal if AI reached goal
  if (maze.position.x === maze.goal.x && maze.position.y === maze.goal.y) {
    showMazeRewardModal('AI reached the goal! Reward applied.');
  }
}

function showMazeRewardModal(message) {
  const modal = document.getElementById('maze-reward-modal');
  const msg = document.getElementById('maze-reward-message');
  msg.innerHTML = message;
  modal.style.display = 'flex';
}

function hideMazeRewardModal() {
  const modal = document.getElementById('maze-reward-modal');
  modal.style.display = 'none';
}

function nextMaze() {
  // Cycle through lessons for demo
  const lessons = ['pain vs pleasure','desire vs need','soft vs hard'];
  const idx = lessons.indexOf(maze.lesson);
  const nextLesson = lessons[(idx+1)%lessons.length];
  const newMaze = new window.Maze(nextLesson);
  Object.assign(maze, newMaze);
  renderMazeGrid();
  updateMazeProgress();
}

window.addEventListener('DOMContentLoaded', () => {
  renderMazeGrid();
  updateMazeProgress();
  document.getElementById('maze-start-btn').onclick = startMaze;
  document.getElementById('maze-finish-btn').onclick = finishMaze;
  document.getElementById('maze-next-btn').onclick = nextMaze;
  document.getElementById('maze-reward-close-btn').onclick = hideMazeRewardModal;
  // Demo: step AI every second
  setInterval(() => { if (!maze.finished) stepAI(); }, 1000);
});
