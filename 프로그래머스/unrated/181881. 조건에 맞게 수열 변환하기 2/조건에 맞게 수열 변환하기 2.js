function solution(arr) {
    const transform = (num) => {
        if (num >= 50 && num % 2 === 0) {
            return num / 2;
        } else if (num < 50 && num % 2 !== 0) {
            return num * 2 + 1;
        }
        return num;
    };

    let x = 0;
    let currentArr = arr.slice(); // 배열 복사
    let nextArr = currentArr.map(transform);

    while (!arraysAreEqual(currentArr, nextArr)) {
        currentArr = nextArr;
        nextArr = currentArr.map(transform);
        x++;
    }

    return x;
}

function arraysAreEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
