let currentValue = 0;
let currentScore = 0
let currentGuess = "";
let currentAnswer = "";

let submitGuess = () => {
    currentGuess = document.getElementById("myAnswer").value;
    let re = new RegExp(currentGuess, 'gi')
    if (currentAnswer.match(re)) {
        currentScore += currentValue;
        document.querySelector(".score").innerHTML = currentScore;
        document.querySelector(".message").innerHTML = `Correct! The full question was ${currentAnswer}.`
    } else {
        currentScore -= currentValue;
        document.querySelector(".score").innerHTML = currentScore;
        document.querySelector(".message").innerHTML = `No, sorry. The question we're looking for was ${currentAnswer}.`
    }
    document.getElementById("myAnswer").value = '';
    document.querySelector(".answer").style.display = 'none';
    document.querySelector(".nextQuestion").style.display = 'block';
}

let startGame = () => {
        fetch('https://jservice.io/api/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".category").innerHTML = data[0].category.title.toUpperCase();
        document.querySelector(".question").innerHTML = data[0].question;
        document.querySelector(".value").innerHTML = "$" + data[0].value;
        currentAnswer = data[0].answer;
        currentValue = data[0].value;
    })
    .catch((err) => {
        console.log(err);
    })
    document.querySelector(".answer").style.display = 'block';
    document.querySelector(".message").innerHTML = '';
    document.querySelector(".nextQuestion").style.display = 'none';
}

startGame();