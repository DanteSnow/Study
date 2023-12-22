function gcd(a, b) {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function solution(n) {
    let gcdValue = gcd(n, 6);
    let lcm = (n * 6) / gcdValue;
    return lcm / 6;
}