function solution(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = (i === j) ? 1 : 0;
        }
    }
    return arr;
}