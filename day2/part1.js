import { data } from './input.js';

const testInput = [
  '11-22',
  '95-115',
  '998-1012',
  '1188511880-1188511890',
  '222220-222224',
  '1698522-1698528',
  '446443-446449',
  '38593856-38593862',
  '565653-565659',
  '824824821-824824827',
  '2121212118-2121212124',
];

const isValidId = (id) => {
  if (id.length % 2 === 1) return true;

  const slicePos = id.length / 2;
  if (id.slice(0, slicePos) === id.slice(slicePos)) return false;
  return true;
};

const solution = (data) => {
  let result = 0;

  data.forEach((range) => {
    const [firstId, lastId] = range.split('-');
    for (let i = Number(firstId); i <= Number(lastId); i++) {
      if (!isValidId(String(i))) {
        result += i;
      }
    }
  });

  return result;
};

console.log(solution(data));
