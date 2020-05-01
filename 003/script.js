fetch('https://dev.to/api/articles?per_page=10')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((x) => {
            let targ = document.querySelector(".carousel");
            if (x.id !== data[0].id) {

                targ.innerHTML += `
                <div class="c-article article-${x.id}">
                <a href="${x.url}">
                <img src="${x.social_image}" />
                <h3>${x.title}</h1>
                </a>
                </div>
                `
            }
        })
        updateArticle(data[0].id);
    })
    .catch((err) => {
        console.log(err)
    })

let updateArticle = (x) => {

    fetch(`https://dev.to/api/articles/${x}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector(".title").innerHTML = data.title;
            document.querySelector(".image").innerHTML = `<img src="${data.cover_image}" />`;
            document.querySelector(".body").innerHTML = data.body_html;
        })
        .catch((err) => {
            console.log(err)
        })

}

document.querySelector(".before").onclick = () => {
    document.querySelector(".carousel").scrollLeft -= 340;
}

document.querySelector(".after").onclick = () => {
    document.querySelector(".carousel").scrollLeft += 340;
}