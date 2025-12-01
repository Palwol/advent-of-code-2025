import { data } from './input.js';

const START_POINT = 50;
const MAX_NUMBER = 99;
const MIN_NUMBER = 0;

const testData = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'];

const rotate = (startPoint, instruction) => {
  const direction = instruction[0];
  const distance = Number(instruction.slice(1));
  let newPoint = startPoint;
  let zeroCount = 0;

  for (let i = 0; i < distance; i++) {
    let next = direction === 'R' ? newPoint + 1 : newPoint - 1;
    if (next > MAX_NUMBER) {
      next = 0;
      zeroCount++;
    } else if (next < MIN_NUMBER) {
      next = MAX_NUMBER;
    } else if (next === 0) {
      zeroCount++;
    }

    newPoint = next;
  }
  console.log(newPoint);

  return { newPoint, zeroCount };
};

const solution = (data) => {
  let currentPoint = START_POINT;
  let result = 0;

  data.forEach((item) => {
    const { newPoint, zeroCount } = rotate(currentPoint, item);

    currentPoint = newPoint;
    result += zeroCount;
  });

  return result;
};

console.log(solution(data));
