function solution(a, b) {
    const concatValue = parseInt(`${a}${b}`);
    const productValue = 2 * a * b;

    return concatValue >= productValue ? concatValue : productValue;
}