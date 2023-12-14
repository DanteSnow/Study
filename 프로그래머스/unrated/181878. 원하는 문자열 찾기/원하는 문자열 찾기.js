function solution(myString, pat) {

    let lowerMyString = myString.toLowerCase();
    let lowerPat = pat.toLowerCase();


    return lowerMyString.includes(lowerPat) ? 1 : 0;
}