function solution(my_string) {
    var words = my_string.split(' ').filter(function(word) {
        return word !== '';
    });
    return words;
}