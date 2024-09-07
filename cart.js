document.addEventListener('DOMContentLoaded', function() {
    const cart = [
        { id: 1, name: 'Sneaker A', price: 99.99, quantity: 2 },
        { id: 2, name: 'Sneaker B', price: 129.99, quantity: 1 }
    ];

    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = itemCount;

    window.removeFromCart = function(id) {
        // This is a placeholder. In a real application, you would need to update the cart data and re-render the items.
        alert(`Item ${id} removed from cart.`);
    };
});
