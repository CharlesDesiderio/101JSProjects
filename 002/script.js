let tasks = [[8, 0], [2, 0], [5, 0], [3, 0], [20, 0], [12, 0], [7, 0], [12, 0], [8, 0], [13, 0], [2, 0], [4, 0], [4, 0]]
let totalProgress = 0;
//13 tasks

let update = (arg) => {
    document.querySelector(".counter").innerHTML = `${totalProgress}% Complete`
    document.querySelector(".prog-bar").style.width = `${totalProgress}%`
    document.getElementById(arg).style.textDecoration = tasks[arg - 1][1] ? "none" : "line-through";
    document.querySelector(".prog-bar").style.backgroundColor = totalProgress === 100 ? "green" : "red";
}

let progress = (arg) => {

    totalProgress = tasks[arg-1][1] ? totalProgress - tasks[arg-1][0] : totalProgress + tasks[arg-1][0];
    tasks[arg-1][1] = !tasks[arg-1][1];
    update(arg);
}