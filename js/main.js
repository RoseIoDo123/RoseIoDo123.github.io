// Отримуємо кнопку додавання товару та список товарів у кошику
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');

// Обробляємо клік по кнопці додавання товару
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Отримуємо назву товару та його ціну з елементів на сторінці
    const product = button.parentElement;
    const title = product.querySelector('h3').innerText;
    const price = product.querySelector('p').innerText.replace('Ціна: ', '');

    // Створюємо елемент списку товарів та додаємо до списку
    const item = document.createElement('li');
    item.innerText = `${title} - ${price} грн.`;
    cartItemsList.appendChild(item);

    // Оновлюємо загальну вартість кошика
    const totalElement = document.querySelector('.total');
    let currentTotal = parseFloat(totalElement.innerText.replace('Загальна вартість: ', ''));
    currentTotal += parseFloat(price);
    totalElement.innerText = `Загальна вартість: ${currentTotal.toFixed(2)} грн.`;
  });
});
