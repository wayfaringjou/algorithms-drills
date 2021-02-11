/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const sheepCounter = (sheep) => {
  if (sheep === 0) {
    return 'All sheep jumped over the fence\n';
  }
  return `${sheep}: Another sheep jumps over the fence\n${sheepCounter(sheep - 1)}`;
};

const powerCalculator = (b, e) => {
  const base = parseInt(b, 10);
  const exp = parseInt(e, 10);

  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  if (exp === 0) {
    return 1;
  }
  return base * powerCalculator(base, exp - 1);
};

const reverseString = (string) => {
  if (string.length === 1) {
    return string;
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

const triangularNumber = (nth) => {
  const nthInt = parseInt(nth, 10);
  if (nthInt === 1) {
    return 1;
  }
  return nthInt + (triangularNumber(nthInt - 1));
};

const splitString = (string, separator) => {
  if (!string.includes(separator)) {
    return [string];
  }
  const sepIndex = string.indexOf(separator);
  return [string.slice(0, sepIndex), ...splitString(string.slice(sepIndex + 1), separator)];
};

const fibonacci = (steps, cache) => {
  const stepsInt = parseInt(steps, 10);
  cache = cache || [];

  if (cache[stepsInt]) {
    return cache[stepsInt];
  }

  if (stepsInt < 2) {
    return steps;
  }
  return cache[stepsInt] = fibonacci(stepsInt - 1, cache) + fibonacci(stepsInt - 2, cache);
};

const factorial = (steps) => {
  const stepsI = parseInt(steps, 10);
  if (stepsI === 1) {
    return 1;
  }
  return steps * factorial(steps - 1);
};

const wayOut = (maze, origin = { y: 0, x: 0 }) => {
  const xBound = maze[0].length - 1;
  const yBound = maze.length - 1;
  const exit = maze[xBound][yBound];

  const movements = {
    U: { y: -1, x: 0 },
    R: { y: 0, x: 1 },
    D: { y: 1, x: 0 },
    L: { y: 0, x: -1 },
  };

  const traverse = Object.keys(movements);
  let exitFound = false;
  let step;

  traverse.forEach((direction) => {
    const y = origin.y + direction.y;
    const x = origin.x + direction.x;
    if (maze[y]) {
      if (maze[y][x]) {
        if (maze[y][x] === 'e') {
          exitFound = true;
          step = direction;
        }
      }
    }
  });

  if (exitFound) {
    return step;
  }

  if (maze[origin.y + movements.U.y]) {
    if (maze[origin.y + movements.U.y][origin.x + movements.U.x] === ' ') {
      step = 'U';
      maze[origin.y + movements.U.y][origin.x + movements.U.x] = '*';
      return step + wayOut(maze, { y: origin.y + movements.U.y, x: origin.x + movements.U.x });
    }
  }

  if (maze[origin.y + movements.R.y]) {
    if (maze[origin.y + movements.R.y][origin.x + movements.R.x] === ' ') {
      step = 'R';
      maze[origin.y + movements.R.y][origin.x + movements.R.x] = '*';
      return step + wayOut(maze, { y: origin.y + movements.R.y, x: origin.x + movements.R.x });
    }
  }

  if (maze[origin.y + movements.D.y]) {
    if (maze[origin.y + movements.D.y][origin.x + movements.D.x] === ' ') {
      step = 'D';
      maze[origin.y + movements.D.y][origin.x + movements.D.x] = '*';
      return step + wayOut(maze, { y: origin.y + movements.D.y, x: origin.x + movements.D.x });
    }
  }

  if (maze[origin.y + movements.L.y]) {
    if (maze[origin.y + movements.L.y][origin.x + movements.L.x] === ' ') {
      step = 'L';
      maze[origin.y + movements.L.y][origin.x + movements.L.x] = '*';
      return step + wayOut(maze, { y: origin.y + movements.L.y, x: origin.x + movements.L.x });
    }
  }

  return 'no path';
};

module.exports = {
  sheepCounter,
  powerCalculator,
  reverseString,
  triangularNumber,
  splitString,
  fibonacci,
};
