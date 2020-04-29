let tasks = [[8, 0], [2, 0], [5, 0], [3, 0], [20, 0], [12, 0], [7, 0], [12, 0], [8, 0], [13, 0], [2, 0], [4, 0], [4, 0]]
let totalProgress = 0;
//13 tasks

let progress = (arg) => {
    
    if (!tasks[arg -1][1]) {
        totalProgress += tasks[arg-1][0];
        tasks[arg-1][1] = 1;
        document.querySelector(".counter").innerHTML = `${totalProgress}% Complete`
        document.querySelector(".prog-bar").style.width = `${totalProgress}%`
        document.getElementById(arg).style.textDecoration = "line-through"
        if (totalProgress === 100) {
            document.querySelector(".prog-bar").style.backgroundColor = "green"
        } else {
            document.querySelector(".prog-bar").style.backgroundColor = "red"
        }
    } else {
        totalProgress -= tasks[arg-1][0];
        tasks[arg-1][1] = 0;
        document.querySelector(".counter").innerHTML = `${totalProgress}% Complete`
        document.querySelector(".prog-bar").style.width = `${totalProgress}%`
        document.getElementById(arg).style.textDecoration = "none"
        if (totalProgress === 100) {
            document.querySelector(".prog-bar").style.backgroundColor = "green"
        } else {
            document.querySelector(".prog-bar").style.backgroundColor = "red"
        }
    }
}