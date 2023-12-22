function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    if (idx !== -1) {
        return myString.substring(0, idx + pat.length);
    }
    return '';
}