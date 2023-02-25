// Знаходимо всі елементи підменю
const submenus = document.querySelectorAll(".submenu");

// Ітеруємося по кожному елементу підменю
submenus.forEach((submenu, index) => {
  // Якщо елемент підменю не перший, забираємо клас "submenu--open"
  if (index !== 0) {
    submenu.classList.remove("submenu--open");
  }
});

// Отримуємо список елементів з класом "has-submenu"
const hasSubmenus = document.querySelectorAll(".has-submenu");

// Додаємо обробник подій "click" для кожного елемента "has-submenu"
hasSubmenus.forEach((hasSubmenu) => {
  const submenu = hasSubmenu.querySelector(".submenu");
  hasSubmenu.addEventListener("click", (event) => {
    // Зупиняємо спливання події кліку до батьківського елементу
    event.stopPropagation();
    submenu.classList.toggle("submenu--open");
  });
  

  // Додаємо обробник подій "click" для кожної підкатегорії
  const submenuItems = submenu.querySelectorAll(".menu-item");
  submenuItems.forEach((submenuItem) => {
    submenuItem.addEventListener("click", (event) => {
      // Зупиняємо спливання події кліку до батьківського елементу
      event.stopPropagation();
    });
  });
});