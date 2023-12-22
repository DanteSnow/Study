function solution(number) {
    let sum = 0;
    for (let char of number) {
        sum += parseInt(char);
    }
    return sum % 9;
}