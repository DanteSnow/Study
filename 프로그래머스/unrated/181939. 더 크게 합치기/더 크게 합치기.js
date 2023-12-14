function solution(a, b) {
    let ab = parseInt(`${a}${b}`);
    let ba = parseInt(`${b}${a}`);

    return Math.max(ab, ba);
}