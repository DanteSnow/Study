function solution(str_list, ex) {
    let tailString = '';

    for (let str of str_list) {
        if (!str.includes(ex)) {
            tailString += str;
        }
    }

    return tailString;
}