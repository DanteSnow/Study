function solution(todo_list, finished) {
    let unfinishedTasks = [];

    for (let i = 0; i < todo_list.length; i++) {
        if (finished[i] === false) {
            unfinishedTasks.push(todo_list[i]);
        }
    }
    return unfinishedTasks;
}