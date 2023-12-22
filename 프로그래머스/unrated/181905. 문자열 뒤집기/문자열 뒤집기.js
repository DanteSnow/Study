function solution(my_string, s, e) {
    let arr = my_string.split('');
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
    return arr.join('');
}
