function solution(num_list) {
    let sortedArray = [...num_list];

    sortedArray.sort((a, b) => a - b);

    sortedArray.splice(0, 5);

    return sortedArray;
}