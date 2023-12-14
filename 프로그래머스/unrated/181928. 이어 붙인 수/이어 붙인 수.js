function solution(num_list) {
    let oddString = '';
    let evenString = '';

    num_list.forEach(num => {
        if (num % 2 === 0) {
            evenString += num;
        } else {
            oddString += num;
        }
    });

    return parseInt(oddString) + parseInt(evenString);
}