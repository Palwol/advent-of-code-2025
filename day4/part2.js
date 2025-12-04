import { data } from './output.js';
import { getIsAccessible, testData } from './part1.js';

const getAccessibleRolls = (data) => {
  const removedData = [...data];
  let removedCount = 0;

  for (let j = 0; j < removedData.length; j++) {
    for (let i = 0; i < removedData[0].length; i++) {
      const isAccessible = getIsAccessible(removedData, i, j);
      if (isAccessible) {
        removedCount += 1;
        removedData[j][i] = '.';
      }
    }
  }

  return { removedData, removedCount };
};

const solution = (data) => {
  let result = 0;
  let currentRemovedData = data;

  while (true) {
    const { removedData, removedCount } = getAccessibleRolls(currentRemovedData);
    result += removedCount;

    if (removedCount === 0) break;

    currentRemovedData = removedData;
  }

  return result;
};

console.log(solution(data));
