function solution(n) {
    let collatz_sequence = [n];
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        collatz_sequence.push(n);
    }
    return collatz_sequence;
}