function solution(myString) {
    let result = "";
    for (let i = 0; i < myString.length; i++) {
        const char = myString[i];
        if (char === 'a') {
            result += 'A';
        } else if (char >= 'B' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}