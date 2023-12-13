function solution(num_list) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        product *= num_list[i];
    }

    if (product < sum * sum) {
        return 1;
    } else {
        return 0;
    }
}