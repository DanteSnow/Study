function solution(num_list, n) {
    let firstPart = num_list.slice(n); 
    let secondPart = num_list.slice(0, n); 

    return firstPart.concat(secondPart); 
}
