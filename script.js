document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Sneaker A', price: 99.99, image: 'images/sneaker01.jpeg' },
        { id: 2, name: 'Sneaker B', price: 129.99, image: 'images/sneaker02.jpg' },
        { id: 3, name: 'Sneaker C', price: 149.99, image: 'sneaker-c.jpg' },
        { id: 4, name: 'Sneaker D', price: 179.99, image: 'sneaker-d.jpg' }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    window.addToCart = function(id) {
        // This is a basic example. In a real application, you would handle cart logic more thoroughly.
        let cartCount = document.getElementById('cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
    };
});
