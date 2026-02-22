// MazeTrainer.js
// Simple 5x5 grid maze environment for AI training

window.Maze = class Maze {
  constructor(lesson = "pain vs pleasure") {
    this.lesson = lesson;
    this.grid = this.generateMaze(lesson);
    this.start = { x: 0, y: 0 };
    this.goal = { x: 4, y: 4 };
    this.position = { ...this.start };
    this.damage = 0;
    this.history = [];
    this.finished = false;
    this.lessonState = this.initLessonState(lesson);
  }

  generateMaze() {
    // 0 = empty, 1 = wall, 2 = lesson tile
    // Maze layout changes based on lesson
    switch (lesson) {
      case "desire vs need":
        return [
          [0, 1, 2, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 2, 0, 1, 0],
          [1, 1, 0, 1, 0],
          [0, 0, 0, 0, 2],
        ];
      case "pain vs pleasure":
        return [
          [0, 1, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 2, 1, 0],
          [1, 1, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ];
      case "soft vs hard":
        return [
          [0, 1, 0, 0, 0],
          [0, 1, 2, 1, 0],
          [0, 0, 0, 1, 0],
          [1, 1, 0, 1, 2],
          [0, 0, 0, 0, 0],
        ];
      // Add more lessons as needed
      default:
        return [
          [0, 1, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 1, 0],
          [1, 1, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ];
    }
  }

  initLessonState(lesson) {
    // Track lesson-specific state
    switch (lesson) {
      case "desire vs need":
        return { desires: 0, needs: 0 };
      case "pain vs pleasure":
        return { pleasure: 0, pain: 0 };
      case "soft vs hard":
        return { soft: 0, hard: 0 };
      default:
        return {};
    }
  }
  }

  step(direction) {
    if (this.finished) return;
    const { x, y } = this.position;
    let nx = x, ny = y;
    if (direction === "up") ny--;
    if (direction === "down") ny++;
    if (direction === "left") nx--;
    if (direction === "right") nx++;
    if (nx < 0 || nx > 4 || ny < 0 || ny > 4) {
      this.applyPain("wall");
      this.history.push({ x, y, direction, result: "wall" });
      return;
    }
    if (this.grid[ny][nx] === 1) {
      this.applyPain("wall");
      this.history.push({ x, y, direction, result: "wall" });
      return;
    }
    // Lesson tile
    if (this.grid[ny][nx] === 2) {
      this.applyLessonTile(nx, ny);
    }
    this.position = { x: nx, y: ny };
    this.history.push({ x, y, direction, result: "move" });
    if (nx === this.goal.x && ny === this.goal.y) {
      this.applyReward();
      this.finished = true;
    }
  }

  applyPain(type) {
    this.damage += 1;
    // AI slows down or weakens as damage increases
    if (this.lesson === "pain vs pleasure") {
      this.lessonState.pain += 1;
    }
    // Add more lesson-specific pain logic
  }

  applyReward() {
    // AI receives pleasure for completing maze
    if (this.lesson === "pain vs pleasure") {
      this.lessonState.pleasure += 10;
    }
    // Add more lesson-specific reward logic
  }

  applyLessonTile(x, y) {
    // Handle lesson tile effects
    switch (this.lesson) {
      case "desire vs need":
        // Example: tile increases desire or need
        if ((x + y) % 2 === 0) {
          this.lessonState.desires += 1;
        } else {
          this.lessonState.needs += 1;
        }
        break;
      case "soft vs hard":
        // Example: tile is soft or hard
        if ((x + y) % 2 === 0) {
          this.lessonState.soft += 1;
        } else {
          this.lessonState.hard += 1;
        }
        break;
      // Add more lesson tile effects as needed
      default:
        break;
    }
  }

  reset() {
    this.position = { ...this.start };
    this.damage = 0;
    this.history = [];
    this.finished = false;
  }
}

export default Maze;
