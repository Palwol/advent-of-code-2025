import { data } from './input.js';

const START_POINT = 50;

const testData = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'];

const rotate = (startPoint, instruction) => {
  const direction = instruction[0];
  const distance = Number(instruction.slice(1));

  const newNumber = direction === 'R' ? (startPoint += distance) : (startPoint -= distance);

  let newPoint;

  if (newNumber < 0) {
    newPoint = (100 - (Math.abs(newNumber) % 100)) % 100;
  } else {
    newPoint = newNumber % 100;
  }

  return newPoint;
};

const solution = (data) => {
  let currentPoint = START_POINT;
  let result = 0;

  data.forEach((item) => {
    const newPoint = rotate(currentPoint, item);
    if (newPoint === 0) result++;

    currentPoint = newPoint;
  });

  return result;
};

console.log(solution(data));
