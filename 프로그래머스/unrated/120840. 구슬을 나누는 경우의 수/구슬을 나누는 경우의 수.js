function solution(balls, share) {
    function factorial(n) {
        let result = BigInt(1);
        for (let i = 2; i <= n; i++) {
            result *= BigInt(i);
        }
        return result;
    }

    return factorial(BigInt(balls)) / (factorial(BigInt(share)) * factorial(BigInt(balls - share)));
}
