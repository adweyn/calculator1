 // Відкриття та закриття модального вікна
      const loginBtn = document.getElementById("loginBtn");
      const loginModal = document.getElementById("loginModal");
      const closeModal = document.getElementsByClassName("close")[0];

      // Відкривати модальне вікно при натисканні на кнопку "Login"
      loginBtn.onclick = function () {
        loginModal.style.display = "block";
      };

      // Закривати модальне вікно при натисканні на хрестик
      closeModal.onclick = function () {
        loginModal.style.display = "none";
      };

      // Закривати модальне вікно, якщо натиснути поза вікном
      window.onclick = function (event) {
        if (event.target == loginModal) {
          loginModal.style.display = "none";
        }
      };
      
      function toggleMenu() {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.toggle("active");
}
      






