
let categorySelect = 0

let startGame = () => {
    // categorySelect = document.getElementById("categories").value;
    // let whichApi = `https://opentdb.com/api.php&category=` + categorySelect;
    // console.log(whichApi, {
    //     mode: 'no-cors'
    // });
    fetch('https://jservice.io/api/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

fetch('https://opentdb.com/api_category.php')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.trivia_categories.forEach((x) => {
            document.getElementById("categories").innerHTML += `
            <option value="${x.id}">${x.name}</option>
            `
        })
    })
    .catch((err) => {
        console.log(err);
    })

    