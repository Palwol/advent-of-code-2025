import { data } from './input.js';

const testData = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];

const findMaxIndex = (bank) => {
  let maxDigit = 0;
  let maxIndex = 0;

  bank.forEach((digit, index) => {
    if (digit > maxDigit) {
      maxDigit = digit;
      maxIndex = index;
    }
  });

  return { maxDigit, maxIndex };
};

const solution = (data) => {
  let result = 0;

  data.forEach((item) => {
    const bank = item.split('');
    const { maxDigit, maxIndex } = findMaxIndex(bank);

    if (maxIndex === bank.length - 1) {
      const { maxDigit: secondMaxDigit } = findMaxIndex(bank.slice(0, maxIndex));
      const jolt = Number(`${secondMaxDigit}${maxDigit}`);
      result += jolt;
    } else {
      const { maxDigit: secondMaxDigit } = findMaxIndex(bank.slice(maxIndex + 1));
      const jolt = Number(`${maxDigit}${secondMaxDigit}`);
      result += jolt;
    }
  });

  return result;
};

console.log(solution(data));
