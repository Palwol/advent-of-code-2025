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
    let slicedBank = bank;
    let jolt = '';

    for (let i = 12; i > 0; i--) {
      const { maxDigit, maxIndex } = findMaxIndex(slicedBank.slice(0, slicedBank.length - i + 1));
      jolt = `${jolt}${maxDigit}`;
      slicedBank = slicedBank.slice(maxIndex + 1);
    }

    result += Number(jolt);
  });

  return result;
};

console.log(solution(data));
