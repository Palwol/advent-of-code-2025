import { data } from './output.js';

export const testData = [
  ['.', '.', '@', '@', '.', '@', '@', '@', '@', '.'],
  ['@', '@', '@', '.', '@', '.', '@', '.', '@', '@'],
  ['@', '@', '@', '@', '@', '.', '@', '.', '@', '@'],
  ['@', '.', '@', '@', '@', '@', '.', '.', '@', '.'],
  ['@', '@', '.', '@', '@', '@', '@', '.', '@', '@'],
  ['.', '@', '@', '@', '@', '@', '@', '@', '.', '@'],
  ['.', '@', '.', '@', '.', '@', '.', '@', '@', '@'],
  ['@', '.', '@', '@', '@', '.', '@', '@', '@', '@'],
  ['.', '@', '@', '@', '@', '@', '@', '@', '@', '.'],
  ['@', '.', '@', '.', '@', '@', '@', '.', '@', '.'],
];

export const getIsAccessible = (data, x, y) => {
  if (data[y][x] === '.') return false;

  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  const xBoundary = data[0].length;
  const yBoundary = data.length;
  let paperCount = 0;

  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < xBoundary && ny >= 0 && ny < yBoundary) {
      paperCount += data[ny][nx] === '@' ? 1 : 0;
    }
  }

  return paperCount < 4;
};

const solution = (data) => {
  let result = 0;

  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[0].length; i++) {
      const isAccessible = getIsAccessible(data, i, j);
      if (isAccessible) result += 1;
    }
  }

  return result;
};

console.log(solution(data));
