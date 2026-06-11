 function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}
