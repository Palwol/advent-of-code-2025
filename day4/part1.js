import { data } from './output.js';

const testData = [
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

const getIsAccessible = (data, x, y) => {
  if (data[y][x] === '.') return false;

  const xBoundary = data[0].length;
  const yBoundary = data.length;
  let paperCount = 0;

  if (x - 1 >= 0 && y - 1 >= 0) {
    paperCount += data[y - 1][x - 1] === '@' ? 1 : 0;
  }
  if (y - 1 >= 0) {
    paperCount += data[y - 1][x] === '@' ? 1 : 0;
  }
  if (x + 1 < xBoundary && y - 1 >= 0) {
    paperCount += data[y - 1][x + 1] === '@' ? 1 : 0;
  }
  if (x - 1 >= 0) {
    paperCount += data[y][x - 1] === '@' ? 1 : 0;
  }
  if (x + 1 < xBoundary) {
    paperCount += data[y][x + 1] === '@' ? 1 : 0;
  }
  if (x - 1 >= 0 && y + 1 < yBoundary) {
    paperCount += data[y + 1][x - 1] === '@' ? 1 : 0;
  }
  if (y + 1 < yBoundary) {
    paperCount += data[y + 1][x] === '@' ? 1 : 0;
  }
  if (x + 1 < xBoundary && y + 1 < yBoundary) {
    paperCount += data[y + 1][x + 1] === '@' ? 1 : 0;
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
