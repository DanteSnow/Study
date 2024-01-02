function solution(strArr) {
  const lengthCounts = {};

  strArr.forEach(str => {
    const length = str.length;
    if (lengthCounts[length]) {
      lengthCounts[length]++;
    } else {
      lengthCounts[length] = 1;
    }
  });

  let maxCount = 0;
  for (const length in lengthCounts) {
    if (lengthCounts[length] > maxCount) {
      maxCount = lengthCounts[length];
    }
  }

  return maxCount;
}