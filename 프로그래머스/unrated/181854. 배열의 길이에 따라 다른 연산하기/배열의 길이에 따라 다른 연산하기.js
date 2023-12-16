function solution(arr, n) {
    let result = arr.slice(); 

    if (arr.length % 2 === 1) { 
        for (let i = 0; i < arr.length; i += 2) {
            result[i] += n; 
        }
    } else { 
        for (let i = 1; i < arr.length; i += 2) {
            result[i] += n; 
        }
    }

    return result;
}