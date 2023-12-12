function solution(myString) {
  
    const splitStrings = myString.split('x');

 
    return splitStrings.map(str => str.length);
}