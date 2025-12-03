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
    let slicedBank = bank.slice(0, bank.length - 1);

    // 첫번째 숫자
    const { maxDigit, maxIndex } = findMaxIndex(slicedBank);
    let jolt = `${maxDigit}`;

    // 두번째 숫자
    const { maxDigit: secondMaxDigit } = findMaxIndex(bank.slice(maxIndex + 1));
    jolt = `${jolt}${secondMaxDigit}`;

    result += Number(jolt);
  });

  return result;
};

console.log(solution(data));
