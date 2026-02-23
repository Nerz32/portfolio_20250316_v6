


// Product data
const products = [
    {
        id: 1,
        image: "assets/img/sample.jpeg",
        name: "Black Hoodie",
        price: 1499
    },
    {
        id: 2,
        image: "assets/img/sample.jpeg",
        name: "White Shirt",
        price: 899
    },
    {
        id: 3,
        image: "assets/img/sample.jpeg",
        name: "Coffee",
        price: 32
    },
    {
        id: 4,
        image: "assets/img/sample.jpeg",
        name: "Poster",
        price: 50
    },
    {
        id: 5,
        image: "assets/img/sample.jpeg",
        name: "Mug",
        price: 82
    }
];


// Product Dynamic Boxes
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
    // Main container
    const box = document.createElement("div");
    box.classList.add("box", "glow_border");

    box.addEventListener("click", function () {
        window.location.href = "product_info.html#" + product.id;
    })

    // Image
    const img = document.createElement("img");
    img.src = product.image;
    // product_info div
    const info = document.createElement("div");
    info.classList.add("product_info");
    // H3 title
    const name = document.createElement("h3");
    name.textContent = product.name;
    // Price paragraph
    const price = document.createElement("p");
    // Font Awesome icon PHP currency
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-peso-sign");

    // Append icon + price text
    price.appendChild(icon);
    price.append(product.price.toFixed(2));

    // Build structure
    info.appendChild(name);
    info.appendChild(price);

    box.appendChild(img);
    box.appendChild(info);

    productGrid.appendChild(box);
});

