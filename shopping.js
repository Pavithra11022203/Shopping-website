let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Clear old cart items

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}