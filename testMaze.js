const wayOut = (maze, origin = { y: 0, x: 0 }, steps = '') => {
  const movements = {
    U: { y: -1, x: 0 },
    R: { y: 0, x: 1 },
    D: { y: 1, x: 0 },
    L: { y: 0, x: -1 },
  };

  const traverse = Object.keys(movements);
  let exitFound = false;
  let step = '';

  traverse.forEach((direction) => {
    const y = origin.y + movements[direction].y;
    const x = origin.x + movements[direction].x;
    if (maze[y]) {
      if (maze[y][x]) {
        if (maze[y][x] === 'e') {
          console.log(`looking for exit in y: ${y} x: ${x}`);
          exitFound = true;
          step = direction;
          // console.log('found exit');
        }
      }
    }
  });

  if (exitFound) {
    console.log('found exit');
    return steps;
  }

  if (maze[origin.y][origin.x] === '*') {
    return step;
  }

  if (maze[origin.y + movements.U.y]) {
    if (maze[origin.y + movements.U.y][origin.x + movements.U.x] === ' ') {
      console.log('can go up');
      step = 'U';
      maze[origin.y][origin.x] = '*';
      steps += step;
      return wayOut(maze, { y: origin.y + movements.U.y, x: origin.x + movements.U.x }, steps);
    }
  }

  if (maze[origin.y + movements.R.y]) {
    if (maze[origin.y + movements.R.y][origin.x + movements.R.x] === ' ') {
      console.log('can go right');
      step = 'R';
      maze[origin.y][origin.x] = '*';
      steps += step;
      return wayOut(maze, { y: origin.y + movements.R.y, x: origin.x + movements.R.x }, steps);
    }
  }

  if (maze[origin.y + movements.D.y]) {
    if (maze[origin.y + movements.D.y][origin.x + movements.D.x] === ' ') {
      console.log('can go down');
      step = 'D';
      maze[origin.y][origin.x] = '*';
      steps += step;
      return wayOut(maze, { y: origin.y + movements.D.y, x: origin.x + movements.D.x }, steps);
    }
  }

  if (maze[origin.y + movements.L.y]) {
    if (maze[origin.y + movements.L.y][origin.x + movements.L.x] === ' ') {
      console.log('can go left');
      step = 'L';
      maze[origin.y][origin.x] = '*';
      steps += step;
      return wayOut(maze, { y: origin.y + movements.L.y, x: origin.x + movements.L.x }, steps);
    }
  }

  return 'no path';
};

const mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', '*'],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

console.log(wayOut(bigMaze));
