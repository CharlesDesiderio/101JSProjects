let data = [{
    prod: "Item 1",
    price: 20.00,
    desc: "Product Description",
    img_url: "http://image.url",
    id: 00001,
    reviews: [{
        r_name: "John",
        rating: 4,
        comments: "Good product, much awesome."
    },
    {
        r_name: "Jenny",
        rating: 2,
        comments: "Ehh."
    },
    {
        r_name: "Tom",
        rating: 1,
        comments: "Garbage. Would give 0 if I could"
    },
    {
        r_name: "Mary",
        rating: 5,
        comments: "SO MUCH WOW!"
    }]

},
{
    prod: "Item 2",
    price: 12.99,
    desc: "Product Description 2",
    img_url: "http://image.url",
    id: 00002,
    reviews: [{
        r_name: "John",
        rating: 4,
        comments: "Good product, much awesome."
    },
    {
        r_name: "Jenny",
        rating: 2,
        comments: "Ehh."
    },
    {
        r_name: "Tom",
        rating: 1,
        comments: "Garbage. Would give 0 if I could"
    },
    {
        r_name: "Mary",
        rating: 5,
        comments: "SO MUCH WOW!"
    }]

},
{
    prod: "Item 3",
    price: 2.99,
    desc: "Product Description 3",
    img_url: "http://image.url",
    id: 00003,
    reviews: [{
        r_name: "John",
        rating: 4,
        comments: "Good product, much awesome."
    },
    {
        r_name: "Jenny",
        rating: 2,
        comments: "Ehh."
    },
    {
        r_name: "Tom",
        rating: 1,
        comments: "Garbage. Would give 0 if I could"
    },
    {
        r_name: "Mary",
        rating: 5,
        comments: "SO MUCH WOW!"
    }]
}]

data.forEach((x) => {
    document.querySelector(".car").innerHTML += `
    <div id="${x.id}" onClick="toggleProd(${x.id})" class="item">
        <h2>${x.prod}</h2>
        <h2>${x.price}</h2>
        <h2><img src="${x.img_url}" /></h2>
        <h3>${x.desc}</h3>
    </div>
    `
})

let toggleProd = (id) => {
    let product = data.filter((x) => x.id === id);

    document.querySelector(".prod").innerHTML = `
        <h2>${product[0].prod}</h2>
        <h3>${product[0].price}</h3>
        <h3>${product[0].desc}</h3>
        <div class="reviews"></div>
    `;

    //console.log(product[0]);

    product[0].reviews.forEach((x) => {
        document.querySelector(".reviews").innerHTML += `
        <div class="rev rev-${x}">
            <h3>${x.r_name}</h3>
            <h3>${x.rating}</h3>
            <h3>${x.comments}</h3>
        </div>
        `

    })

}