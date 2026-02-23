
// Get IF from URL
// const params = new URLSearchParams(window.location.search);
// const productId = parseInt(params.get("id"));
const productId = parseInt(window.location.hash.substring(1))

// Find product
const product = products.find(p => p.id === productId);

// Inject data
// if (product) {

//     document.getElementById("product_name").textContent = product.name;

//     document.getElementById("product_price").textContent = "PHP" + product.price;
// }

if (!product) {
    document.body.innerHTML = "<h1>Product not found</h1>";
    throw new Error("Invalid product ID");
} else {
    document.getElementById("product_name").textContent = product.name;
    document.getElementById("product_price").textContent = "PHP" + product.price;
}